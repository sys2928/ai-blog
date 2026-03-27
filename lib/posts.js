// lib/posts.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDir = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDir)
  const posts = fileNames
    .filter(f => f.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        tag: data.tag || 'AI',
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  return posts
}

export function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDir)
  return fileNames
    .filter(f => f.endsWith('.md'))
    .map(fileName => ({
      params: { slug: fileName.replace(/\.md$/, '') }
    }))
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(remarkGfm).use(html).process(content)
  let contentHtml = processedContent.toString()

  // 테이블을 스크롤 가능한 div로 감싸기 (모바일 대응)
  contentHtml = contentHtml.replace(
    /<table>/g,
    '<div class="table-wrap"><table>'
  ).replace(
    /<\/table>/g,
    '</table></div>'
  )

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    tag: data.tag || 'AI',
    contentHtml,
  }
}
