import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
}

function DashboardLayout({ children }: Props) {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
