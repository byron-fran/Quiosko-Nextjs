export function formatCurrency (amount : number){
    return new Intl.NumberFormat('en-US', {
        style : 'currency',
        currency : 'USD'
    }).format(amount)
};

export const convertedImage = (pathImage : string) => {
    const urlStart = 'https://res.cloudinary.com'
    if(pathImage.startsWith(urlStart)){

        return pathImage
    }
    else{
        return `/products/${pathImage}.jpg`
    }
}