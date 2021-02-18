let locationCollection = [
    {
        image: "https://www.elitetraveler.com/wp-content/uploads/2018/12/Lizard-Island-e1545319622783.png",
        city: "Queensland",
        country: "Australia",
        waterbody: "Pacific Ocean",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS451SKfRMqv6o0vZPpfu79N2mnNj1QXEB9bQ&usqp=CAU",
        city: "Sydney",
        country: "Australia",
        waterbody: "Pacific Ocean",
    },
    {
        image: "https://earth.org/wp-content/uploads/2020/05/Webp.net-resizeimage-2020-05-18T110342.556.jpg",
        city: "Great Barrier Reef",
        country: "Australia",
        waterbody: "Pacific Ocean",
    },
]

export const useLocation = () => {
    return locationCollection.slice()
}