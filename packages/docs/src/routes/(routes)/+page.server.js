import { stats } from "$lib/data/stats.js"

export async function load({ params }) {
  const response = await fetch("https://img.daisyui.com/data/testimonials.json")
  const testimonials = await response.json()
  return {
    testimonials,
    stats,
  }
}
