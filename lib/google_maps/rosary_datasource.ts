import { DOMParser } from "xmldom";

const KML_URL: string =
  "https://www.google.com/maps/d/u/0/kml?forcekml=1&mid=1RRHCUPF7ygW2cj4tRMbiKwSC9tAxXyXS";

export async function getRosaryPlacesCountFromKML() {
  const response = await fetch(KML_URL);
  const data = await response.text();

  const kmlDom = new DOMParser().parseFromString(data);

  const rawTotal = kmlDom.documentElement.getElementsByTagName("Placemark").length
  const total = Math.floor(rawTotal / 10) * 10

  return `${total}`;
}

// export async function getRosaryPlacesFolders(params:type) {
    // const folderNames = Array.from(kmlDom.documentElement.getElementsByTagName("Folder")).map((folder)=>{
    //     folder.
    // })
// }
