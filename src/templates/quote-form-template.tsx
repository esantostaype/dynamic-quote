import { TabList } from '@/components/tabs/TabList'
import { Tab } from '@/interfaces'

interface Props {
  children: React.ReactNode
  tabList: Tab[]
  activeTab: string
  setActiveTab: (tabId: string) => void
  completedTabs: Set<unknown>
}

export const QuoteFormTemplate = ({ children, tabList, activeTab, setActiveTab, completedTabs }: Props) => {
  return (
    <>
    <TabList tabList={ tabList } activeTab={ activeTab } completedTabs={ completedTabs } setActiveTab={ setActiveTab } />
    <div className="border-l border-[rgba(255,255,255,0.16)] flex-[4] py-2 pr-2 overflow-y-auto">
      <div className="flex flex-col pt-4 pb-6 px-8 xl:pt-8 xl:pb-10 xl:px-12 h-full overflow-y-auto quote-content">
        { children }
      </div>
    </div>
    </>
  )
}
