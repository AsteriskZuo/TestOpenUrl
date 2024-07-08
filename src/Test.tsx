import FileViewer from "react-native-file-viewer";
import DocumentPicker from "react-native-document-picker";
import ImagePicker from "react-native-image-crop-picker";
import RNFS from "react-native-fs";

export async function Test1() {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    if (res.length < 1) {
      return;
    }
    console.log('test:zuoyu:res:', res[0]);
    const url = res[0].uri;
    await FileViewer.open(url);
  } catch (e) {
    console.warn(e);
  }
}

export function Test2() {
  ImagePicker.openPicker({})
    .then((image) => FileViewer.open(image.path))
    .catch((error) => {
      console.warn(error);
    });
}

export function Test3() {
  const file = "file-to-open.doc"; // this is your file name
  // feel free to change main path according to your requirements
  const dest = `${RNFS.DocumentDirectoryPath}/${file}`;

  RNFS.copyFileAssets(file, dest)
    .then(() => FileViewer.open(dest))
    .then(() => {
      // success
    })
    .catch((error) => {
      console.warn(error);
    });
}
