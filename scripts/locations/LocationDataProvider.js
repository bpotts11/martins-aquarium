const locationCollection = [
    {
        image: "",
        city: "Queensland",
        country: "Australia",
        waterbody: "Pacific Ocean",
    },
    {
        image: "",
        city: "Sydney",
        country: "Australia",
        waterbody: "Pacific Ocean",
    },
    {
        image: "",
        city: "Morro Bay",
        country: "Australia",
        waterbody: "Pacific Ocean",
    },
]

export const useLocation = () => {
    return locationCollection.slice()
}