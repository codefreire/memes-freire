export async function getMemesByPopular(){
    const response = await fetch('https://api.imgflip.com/get_memes')
    const responseJson = await response.json()
    return responseJson
}

export default getMemesByPopular