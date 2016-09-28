export const GetMenuList = () => {
   return fetch('http://cwhite-l7.advent.com:5000/api/file/root/children')  
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

export const GetFileList = (folderId) => {
  return fetch(`http://cwhite-l7.advent.com:5000/api/file/root/${folderId}`)  
  .then(function(response) {
    return response.json()
  })
}