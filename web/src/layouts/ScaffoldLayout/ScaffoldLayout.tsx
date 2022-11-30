import { UserPlusIcon, HomeIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel: string
  buttonTo: string
  children: React.ReactNode
}

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}: LayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="rw-link">
            {title}
          </Link>
        </h1>
        <div className="flex gap-2">
          <Link to={routes[buttonTo]()} className="rw-button rw-button-green">
            {/* <div className="rw-button-icon">+</div> {buttonLabel} */}
            <UserPlusIcon className="mr-2 h-6 w-6" />
            {buttonLabel}
          </Link>
          <Link to={routes.home()} className="rw-button rw-button-blue">
            <HomeIcon className="mr-2 h-6 w-6" /> Home
          </Link>
        </div>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
