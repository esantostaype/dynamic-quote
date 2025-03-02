'use client'
import { Tab } from '@/interfaces'
import { TabItem } from './TabItem'

interface Props {
  tabList: Tab[];
  activeTab: string;
  setActiveTab: (tabId: string) => void
  completedTabs: Set<unknown>
}

export const TabList = ({ tabList, activeTab, setActiveTab, completedTabs }: Props ) => {

  const canNavigateToTab = ( tabId: string ) => {
    const tabIndex = tabList.findIndex( tab => tab.id === tabId )
    const currentIndex = tabList.findIndex( tab => tab.id === activeTab )
    return tabIndex <= currentIndex || completedTabs.has( tabList[ tabIndex - 1 ].id )
  }
  
  return (
    <div className="flex-1 min-w-52 p-2 xl:p-4">
      <ul className="flex flex-col gap-2 xl:gap-3">
        { tabList.map(( tab ) => (
          <TabItem
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            isActive={activeTab === tab.id}
            isCompleted={completedTabs.has(tab.id)}
            onClick={() => canNavigateToTab(tab.id) && setActiveTab(tab.id)}
            disabled={!canNavigateToTab(tab.id)}
          />
        ))}
      </ul>
    </div>
  )
}