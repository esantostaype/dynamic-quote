import type { CheckboxRadioOption, Step, Tab } from "@/interfaces"
import {
  Briefcase,
  ChartBar,
  ClipboardText,
  CreditCard,
  Gear,
  Info,
  ListChecks,
  Note,
  Package,
  ShoppingBag,
  Target,
} from "@phosphor-icons/react"

export const stepsData: Step[] = [
  {
    title: "Company Profile",
    icon: <Briefcase className="size-6 xl:size-8" size={32} weight="thin" />,
    path: "/company-profile",
    key: "CompanyProfile"
  },
  {
    title: "Project Scope",
    icon: <Package className="size-6 xl:size-8" size={32} weight="thin" />,
    path: "/project-scope",
    key: "ProjectScope"
  },
  {
    title: "Features",
    icon: <Gear className="size-6 xl:size-8" size={32} weight="thin" />,
    path: "/features",
    key: "Features"
  },
  {
    title: "Requirements",
    icon: <ClipboardText className="size-6 xl:size-8" size={32} weight="thin" />,
    path: "/requirements",
    key: "Requirements"
  },
  {
    title: "Summary",
    icon: <ListChecks className="size-6 xl:size-8" size={32} weight="thin" />,
    path: "/summary",
    key: "Summary"
  },
  {
    title: "Payment Methods",
    icon: <CreditCard className="size-6 xl:size-8" size={32} weight="thin" />,
    path: "/payment-methods",
    key: "PaymentMethods"
  },
  {
    title: "Check-out",
    icon: <ShoppingBag className="size-6 xl:size-8" size={32} weight="thin" />,
    path: "/check-out",
    key: "CheckOut"
  },
]

export const companyProfileTabs: Tab[] = [
  {
    id: "information",
    label: "Information",
    icon: <Info size={20} weight="light" />,
  },
  {
    id: "projectGoals",
    label: "Project Goals",
    icon: <Target size={20} weight="light" />,
  },
  {
    id: "knowledgeLevel",
    label: "Knowledge Level",
    icon: <ChartBar size={20} weight="light" />,
  },
  {
    id: "additionalNotes",
    label: "Additional Notes",
    icon: <Note size={20} weight="light" />,
  },
]

export const projectScopeTabs: Tab[] = [
  {
    id: "softwareType",
    label: "Software Type",
    icon: <Info size={20} weight="light" />,
  },
  {
    id: "mainPurpose",
    label: "Main Purpose",
    icon: <Target size={20} weight="light" />,
  }
]

export const states:string[] = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]

export const industry:string[] = [
  "Fashion & Apparel",
  "Electronics & Technology",
  "Home & Furniture",
  "Sports & Recreation",
  "Beauty & Personal Care",
  "Financial Services",
  "Legal Services",
  "Consulting",
  "Real Estate",
  "Marketing & Advertising",
  "Medical Practice",
  "Dental",
  "Mental Health",
  "Alternative Medicine",
  "Fitness & Wellness",
  "Restaurants & Cafes",
  "Hotels & Lodging",
  "Travel & Tourism",
  "Events & Entertainment",
  "Food Services",
  "Schools & Universities",
  "Professiional Training",
  "Online Courses",
  "Tutoring Services",
  "Educational Technology",
  "Consumer Goods",
  "Industrial Equipment",
  "Automotive",
  "Electronics Manufacturing",
  "Custom Manufacturing",
]

export const companySize:string[] = [
  "Startup (1-10 Employes)",
  "Small Business (11-50 Employes)",
  "Medium Business (51-200 Employes)",
  "Large Business (200+ Employes)",
]

export const yearInBusiness:string[] = [
  "1-2 Years",
  "3-5 Years",
  "5-10 Years",
  "More than 10 years",
]

export const projectGoals:CheckboxRadioOption[] = [
  {
    label: "Increase revenue"
  },
  {
    label: "Improve operational efficiency"
  },
  {
    label: "Enhance customer experience"
  },
  {
    label: "Expand into new markets"
  },
  {
    label: "Other"
  }
]

export const knowledgeLevels:CheckboxRadioOption[] = [
  {
    label: "Beginner",
    description:
      "I have little to no experience with technical terms or software projects. I need guidance and clear explanations.",
    helperText: "Not sure?",
  },
  {
    label: "Intermediate",
    description:
      "I understand basic concepts and have been involved in some projects, but I still appreciate recommendations and best practices.",
    helperText: "Not sure?",
  },
  {
    label: "Advanced",
    description:
      "I know exactly what I need and can configure advanced technical details on my own.",
    helperText: "Not sure?",
  },
]

export const softwareType:CheckboxRadioOption[] = [
  {
    label: "Mobile Application",
    description:
      "Optimized for on-the-go access on iOS/Android devices"
  },
  {
    label: "Web System",
    description:
      "Accessible through web browsers, perfect for cross-platform use"
  },
  {
    label: "Desktop Software",
    description:
      "High-performance applications for Windows, macOS, or Linux"
  },
  {
    label: "Integrated System",
    description:
      "Comprehensive solution combining multiple platforms"
  }
]

export const mainPurpose:CheckboxRadioOption[] = [
  {
    label: "Consumer App",
    description:
      "E-commerce, social media, entertainment apps"
  },
  {
    label: "Business App",
    description:
      "Enterprise management, analytics tools"
  },
  {
    label: "Service App",
    description:
      "Customer service, bookings, deliveries"
  },
  {
    label: "Internal Tool",
    description:
      "Tools for internal workflows/processes"
  }
]
