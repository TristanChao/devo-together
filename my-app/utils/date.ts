export function isWithinLast24Hours(timestamp: Date, now: Date): boolean {
  const nowDate = now.getDate()
  const stampDate = timestamp.getDate()

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if (nowDate - stampDate >= 2) { //more than 2 days
    return false;
  } else if (stampDate > nowDate && (nowDate + monthDays[timestamp.getMonth() - 1]) >= 2) { //more than 2 days, accounting for new month
    return false;
  } else if (nowDate - stampDate === 1 && now.getHours() > timestamp.getHours()){ // 1 date apart, hours greater
    return false;
  } else if (nowDate - stampDate === 1 && now.getHours() === timestamp.getHours() && now.getMinutes() > timestamp.getMinutes()) { // 1 date apart, hours equal, minutes greater
    return false;
  } else {
    return true;
  }
}

export function formatTime(timestamp: Date): string {
  const now = new Date()
  if (isWithinLast24Hours(timestamp, now)) {
    const hourDiff = now.getHours() - timestamp.getHours()
    if (hourDiff === 0) {
      if (now.getMinutes() - timestamp.getMinutes() > 1) {
        return (`${now.getMinutes() - timestamp.getMinutes()} minutes ago`)
      } else {
        return ("1 minute ago")
      }
    } else if (hourDiff === 1) {
      return ("1 hour ago")
    } else {
      return (`${hourDiff} hours ago`)
    }
  } else {
    return timestamp.toLocaleDateString()
  }
}