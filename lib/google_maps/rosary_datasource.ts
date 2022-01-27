import { toString, memoizeWith } from "ramda";
import { DOMParser } from "xmldom";

const KML_URL: string =
  "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1RRHCUPF7ygW2cj4tRMbiKwSC9tAxXyXS";

export async function getRosaryPlacesCountFromKML() {
  const kmlDom = await getKMLFile(KML_URL);
  const total = getPlacemarks(kmlDom).length;

  return total;
}

export const getKMLFile = memoizeWith(toString, async (url) => {
    const response = await fetch(url);
    const data = await response.text();

    return new DOMParser().parseFromString(data);
})

// XML Helpers

const getPlacemarks = (element: Document | HTMLElement) => {
    return element.getElementsByTagName("Placemark")
}

const getFolders = (element: Document | HTMLElement) => {
  return element.getElementsByTagName("Folder")
}

const getName = (element: HTMLElement) => {
  return element.getElementsByTagName("name").item(0)?.textContent
}

const getCoordinates = (element: HTMLElement) => {
  return element.getElementsByTagName("coordinates").item(0)?.textContent
}

const getDescription = (element: HTMLElement) => {
  return element.getElementsByTagName("description").item(0)?.textContent
}

// If we need to iterate, use :
// Array.from(kmlDom.documentElement.getElementsByTagName("Folder")).map(() => {})