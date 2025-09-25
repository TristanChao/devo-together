export interface Post {
  id: string,
  userId: string,
  userName: string,
  category: string,
  passage?: string,
  content: string,
  timestamp: Date,
}

export let posts: Post[] = [
  {
    id: "7uMUiUZpByvnQ4wIE8Kv",
    userId: "s2YDuF46NHCWQtSMXv75",
    userName: "Tristan Chao",
    category: "devo",
    passage: "Isaiah 5:1-10",
    content: "Today I read through Isaiah 5:1-10, which was the beginning of many woes for the evils of Jerusalem. The first woe was against land speculators, who took people’s land and combined them to build larger estates for a profit. God intended for people’s land to belong to a family across generations, and these speculators were taking them out of greed. God cursed them with unproductive land and empty homes.",
    timestamp: new Date("September 24, 2025 10:20:20"),
  },
  {
    id: "RYdO5nOUprm7vQf3j9IC",
    userId: "s2YDuF46NHCWQtSMXv75",
    userName: "Tristan Chao",
    category: "prayer",
    content: "Please pray for boldness in sharing my faith.",
    timestamp: new Date("September 24, 2025 15:20:20"),
  },
  {
    id: "siH5GJiesvW0O1YmP2vd",
    userId: "s2YDuF46NHCWQtSMXv75",
    userName: "Tristan Chao",
    category: "prayer",
    content: "Please pray for boldness in sharing my faith.",
    timestamp: new Date("September 24, 2025 16:45:00"),
  },
  {
    id: "6j3FQDrKAk0mQx21A1MD",
    userId: "s2YDuF46NHCWQtSMXv75",
    userName: "Tristan Chao",
    category: "prayer",
    content: "Please pray for boldness in sharing my faith.",
    timestamp: new Date("September 22, 2025 16:45:00"),
  },
]