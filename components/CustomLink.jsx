import { useRouter } from 'next/router'
import { useEffect, ReactNode, HTMLAttributes } from 'react'

// typically you want to use `next/link` for this usecaseCcc
// but this example shows how you can also access the router
// and use it manually
export default function CustomLink({
  children,
  href,
  prefetch = false,
  replace = false,
  shallow = false,
  ...props
}) {
  const router = useRouter()

  useEffect(() => {
    if (prefetch) {
      router.prefetch(href)
    }
  }, [router, href, prefetch])

  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        event.preventDefault()
        if (replace) {
          router.replace(href, undefined, { shallow })
        } else {
          router.push(href, undefined, { shallow })
        }
      }}
    >
      {children}
    </a>
  )
}
