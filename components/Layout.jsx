import GlobalNavBar from './GlobalNavbar'

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <GlobalNavBar />
      {/* <Navbar /> */}
      <div className="p-6 mx-auto">{children}</div>
    </div>
  )
}
