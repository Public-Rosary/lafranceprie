import { compose, last, reject, isNil, toString, map, memoizeWith, range, split } from "ramda";
import { DOMParser } from "xmldom";

const KML_URL: string =
  "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1RRHCUPF7ygW2cj4tRMbiKwSC9tAxXyXS";

export async function getRosaryPlacesTotalCount() {
  const kmlDom = await getKMLFile(KML_URL);
  const total = getPlacemarks(kmlDom)?.length || 0;

  return total;
}


export async function getRosaryPlacesCountByWeekday(){
  const kmlDom = await getKMLFile(KML_URL);
  const foldersList = getFolders(kmlDom)
  const foldersCount = foldersList.length

  const getFolderName = (index: number) => {
    const folder = foldersList.item(index)
    return {
      name: compose(extractLastWord, getName)(folder) as string,
      count: getPlacemarks(folder)?.length || 0
    }
  }

  const folders = map(getFolderName, range(0, foldersCount))

  return folders
}

export const getKMLFile = memoizeWith(toString, async (url) => {
    const response = await fetch(url);
    const data = await response.text();

    return new DOMParser().parseFromString(data);
})

// XML Helpers

const getPlacemarks = (element: Document | HTMLElement | Element | null) => {
  return element?.getElementsByTagName("Placemark")
}

const getFolders = (element: Document | HTMLElement) => {
  return element.getElementsByTagName("Folder")
}

const getName = (element: HTMLElement | Element | null) => {
  return element?.getElementsByTagName("name").item(0)?.textContent || ""
}

const getCoordinates = (element: HTMLElement | Element | null) => {
  return element?.getElementsByTagName("coordinates").item(0)?.textContent
}

const getDescription = (element: HTMLElement | Element | null) => {
  return element?.getElementsByTagName("description").item(0)?.textContent
}

// Name helpers

const extractLastWord = compose(last, split(" "))

// If we need to iterate, use :
// Array.from(kmlDom.documentElement.getElementsByTagName("Folder")).map(() => {})