import { expect, test } from '@playwright/test'

test('home page exposes the focused positioning and primary conversions', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('AI product engineering')
  await expect(page.getByRole('link', { name: /Book a 30-minute discovery call/ }).first()).toHaveAttribute(
    'href',
    'https://calendly.com/kalravinayak07/30min',
  )
  await expect(page.getByRole('link', { name: /View selected work/ })).toBeVisible()
})

test('service and case-study pages are routable and indexable', async ({ page }) => {
  await page.goto('/services/ai-product-engineering')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('AI product engineering')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://quadbtechnologies.com/services/ai-product-engineering',
  )

  await page.goto('/work/heebee')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Heebee Coffee')
  await expect(page.getByText('15 min → 30 sec')).toBeVisible()
})

test('legacy routes permanently redirect', async ({ request }) => {
  const ai = await request.get('/ai', { maxRedirects: 0 })
  expect(ai.status()).toBe(308)
  expect(ai.headers().location).toBe('/services/ai-product-engineering')

  const work = await request.get('/how-we-work', { maxRedirects: 0 })
  expect(work.status()).toBe(308)
  expect(work.headers().location).toBe('/work')

  const partners = await request.get('/partners', { maxRedirects: 0 })
  expect(partners.status()).toBe(308)
  expect(partners.headers().location).toBe('/services')
})

test('contact form is labeled and keyboard-accessible', async ({ page }) => {
  await page.goto('/contact')
  await page.getByLabel('Your name').fill('Asha Mehta')
  await page.getByLabel('Work email').fill('asha@example.com')
  await page.getByLabel('What do you need?').selectOption('AI product engineering')
  await page.getByLabel('Tell us about the product, decision or bottleneck').fill(
    'We need to productionize an internal AI operations workflow.',
  )
  await page.getByLabel(/I agree that QuadB Technologies/).check()
  await expect(page.getByRole('button', { name: 'Send inquiry' })).toBeEnabled()
})

test('mobile navigation reports its state and opens with keyboard focus', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile-only behavior')
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Open navigation' })
  await toggle.click()
  const dialog = page.getByRole('dialog', { name: 'Mobile navigation' })
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('button', { name: 'Close navigation' })).toBeVisible()
  await expect(dialog.getByRole('link', { name: 'Home' })).toBeFocused()
})
