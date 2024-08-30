import Header from '@/components/template/Header'
import SidePanel from '@/components/template/SidePanel'
import UserDropdown from '@/components/template/UserDropdown'
import LanguageSelector from '@/components/template/LanguageSelector'
import Notification from '@/components/template/Notification'
import SideNavToggle from '@/components/template/SideNavToggle'
import MobileNav from '@/components/template/MobileNav'
import Search from '@/components/template/Search'
import SideNav from '@/components/template/SideNav'
import View from '@/views'
import { UserDetailsProvider } from '@/views/Context/userdetailsContext'
import { RoleProvider } from '@/views/crm/Roles/RolesContext'
import { LeadProvider } from '@/views/crm/LeadList/store/LeadContext'
import { ProjectProvider } from '@/views/crm/Customers/store/ProjectContext'

const HeaderActionsStart = () => {
    return (
        <>
            <MobileNav />
            <SideNavToggle />
            {/* <Search /> */}
        </>
    )
}

const HeaderActionsEnd = () => {
    return (
        <>
            <Notification />
            <SidePanel />
            <UserDropdown hoverable={false} />
          
        </>
    )
}

const ModernLayout = () => {
    return (
        <div className="app-layout-modern flex flex-auto flex-col">
            <div className="flex flex-auto min-w-0">
                <SideNav />
                <UserDetailsProvider>
                    <ProjectProvider>
                <LeadProvider>
                    <RoleProvider>
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
                    <Header
                        className="border-b border-gray-200 dark:border-gray-700"
                        headerEnd={<HeaderActionsEnd />}
                        headerStart={<HeaderActionsStart />}
                    />
                    <View />
                </div>
                    </RoleProvider>
                    </LeadProvider>
                    </ProjectProvider>
                    </UserDetailsProvider>
            </div>
        </div>
    )
}

export default ModernLayout
