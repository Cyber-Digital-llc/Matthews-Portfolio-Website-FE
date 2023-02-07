import GlobalNavBar from './GlobalNavbar'

export const Layout = ({ children }) => {
  return (
    <div className="">
      <GlobalNavBar />
      <div className="mx-auto">{children}</div>
    </div>
  )
}
