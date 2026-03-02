// source/get.js
import fetch from "node-fetch";

async function main() {
  const url = "https://play.ovp.peacocktv.com/video/playouts/event";

  const headers = {
    "X-SkyOTT-SubBouquetId": "0",
    "X-SkyOTT-AB-ATOM": "UnpinSubpageRailsRetry3:variation1;coviewV1:control",
    "x-sky-signature": 'SkyOTT client="NBCU-WEB-v8",signature="85WU72kGtBF9BWLwKI1amEHX+fs=",timestamp="1772452214",version="1.0"',
    "X-SkyOTT-Provider": "NBCU",
    "X-SkyOTT-PinOverride": "false",
    "X-SkyOTT-Proposition": "NBCUOTT",
    "X-SkyOTT-Language": "en",
    "X-SkyOTT-Territory": "US",
    "X-SkyOTT-UserToken": "156-D9T3RE82XcoK3sIIAMvzDto2N7PBQtytVMge/IAmGEm+o9msSSYligKAUj8dxWq6DLWvzRJ+PneTfYvvZXLalANTW1C25v8JehoOCVGYSfNBmdIEzuJgJGFaPu1C6qBljtvh8/pCgj5CPBI40n4U+2+Jv4ubd8O6FEzwcvMvnjyyG9CxUjgo04SjdUChFPVfEcDVjVfHTd68Pu+s6qucR19YxOwqDZktTv8Y7wKYJyiHCKGVZdvpVRqeRQawJtCXRDJy0f8q8E2B41wcBsiqojcOjyzcb9g9q8ffKrSb+IVowIg4YeqxXwdv/MIKFk1ny/kSK84edhSQtyvv7WPXwnDzA5h9pJ+/ZEEKnS4sWcC2k/HE0JLb0Undtvyz6XjYw1fJ8H0e7RFw5Sz54EXfv/B941GR8dQwqLGWKCr4ov39eoftg6eliwgz5rU09ttWgPpkDsiRdNYVSmUf2kRmvg/ytOD9fzJzCWp4hSztoqIYyadTNjYcy0EgYuh3q/UhW20XysaKxnCmbco0Qz+vbhvsJZfR1LRD3tSEHLZiZSar7DPgQ7pZk+om7Homih+/9MdfXGxp58+frG3RGWOdQkRaHhuw9ST5i6Kyy2K0ubl3Y1uS3N2AmnesCZNl1axgn10OKfxCMK6GsgIQ9dZpLI7HSGWM+Hm1xC6dBNinaKIYbsqoTD0TO8xaPrNGXH2AHBcHjRfTy4/sYzjW5zv6oA==",
    "Accept": "application/vnd.playevent.v1+json",
    "Content-Type": "application/vnd.playevent.v1+json",
    "X-SkyOTT-Platform": "PC",
    "X-SkyOTT-ActiveTerritory": "US",
    "Referer": "https://www.peacocktv.com/",
    "X-SkyOTT-Device": "COMPUTER",
    "User-Agent": "Mozilla/5.0",
    "X-SkyOTT-COPPA": "false",
    "X-SkyOTT-BouquetId": "5401446705201714117"
  };

  const body = {
    device: {
      capabilities: [
        { acodec: "AAC", container: "ISOBMFF", protection: "WIDEVINE", transport: "DASH", vcodec: "H264" },
        { acodec: "AAC", container: "ISOBMFF", protection: "NONE", transport: "DASH", vcodec: "H264" }
      ],
      maxVideoFormat: "HD",
      supportedColourSpaces: ["SDR"],
      model: "PC",
      hdcpEnabled: false
    },
    client: {
      thirdParties: ["FREEWHEEL", "MEDIATAILOR", "CONVIVA", "FRV4"],
      variantCapable: true
    },
    contentId: "PCKSLE:8f0122cc-7c18-471b-ac64-52df94e1d223:4ec89030-b072-4e57-89ee-aa98cc15dad3",
    providerVariantId: "5161cb36-b702-3817-a596-4b4561d20f64",
    parentalControlPin: null,
    personaParentalControlRating: "9"
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });

    console.log("Status:", response.status);
    console.log("Headers:", response.headers.raw());
    const text = await response.text();
    console.log("Body:", text);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
