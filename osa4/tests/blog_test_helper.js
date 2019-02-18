const initialBlogs = [
  {
    title: "Monkey Trouble",
    url:
      "http://rediff.com/eget.js?vel=hac&augue=habitasse&vestibulum=platea&ante=dictumst&ipsum=etiam&primis=faucibus&in=cursus&faucibus=urna&orci=ut&luctus=tellus&et=nulla&ultrices=ut&posuere=erat&cubilia=id&curae=mauris&donec=vulputate&pharetra=elementum&magna=nullam&vestibulum=varius&aliquet=nulla&ultrices=facilisi&erat=cras&tortor=non&sollicitudin=velit&mi=nec&sit=nisi&amet=vulputate&lobortis=nonummy&sapien=maecenas&sapien=tincidunt&non=lacus&mi=at&integer=velit&ac=vivamus&neque=vel&duis=nulla&bibendum=eget&morbi=eros&non=elementum&quam=pellentesque&nec=quisque&dui=porta&luctus=volutpat&rutrum=erat&nulla=quisque&tellus=erat&in=eros&sagittis=viverra&dui=eget&vel=congue&nisl=eget&duis=semper&ac=rutrum&nibh=nulla&fusce=nunc&lacus=purus&purus=phasellus&aliquet=in&at=felis&feugiat=donec&non=semper&pretium=sapien&quis=a&lectus=libero&suspendisse=nam&potenti=dui&in=proin&eleifend=leo&quam=odio&a=porttitor&odio=id&in=consequat&hac=in&habitasse=consequat&platea=ut&dictumst=nulla&maecenas=sed&ut=accumsan&massa=felis&quis=ut&augue=at&luctus=dolor&tincidunt=quis&nulla=odio&mollis=consequat&molestie=varius&lorem=integer&quisque=ac&ut=leo&erat=pellentesque&curabitur=ultrices&gravida=mattis",
    author: "Marco Kuhne",
    likes: 3666
  },
  {
    title: "Children of a Lesser God",
    url:
      "https://a8.net/habitasse/platea/dictumst.png?fusce=diam&consequat=id&nulla=ornare&nisl=imperdiet&nunc=sapien&nisl=urna&duis=pretium&bibendum=nisl&felis=ut&sed=volutpat&interdum=sapien&venenatis=arcu&turpis=sed&enim=augue&blandit=aliquam&mi=erat&in=volutpat&porttitor=in&pede=congue&justo=etiam&eu=justo&massa=etiam&donec=pretium&dapibus=iaculis&duis=justo&at=in&velit=hac&eu=habitasse&est=platea&congue=dictumst&elementum=etiam&in=faucibus&hac=cursus&habitasse=urna&platea=ut&dictumst=tellus&morbi=nulla&vestibulum=ut&velit=erat&id=id&pretium=mauris&iaculis=vulputate&diam=elementum&erat=nullam&fermentum=varius&justo=nulla&nec=facilisi&condimentum=cras&neque=non&sapien=velit&placerat=nec&ante=nisi&nulla=vulputate&justo=nonummy&aliquam=maecenas&quis=tincidunt&turpis=lacus&eget=at&elit=velit&sodales=vivamus&scelerisque=vel&mauris=nulla&sit=eget&amet=eros&eros=elementum&suspendisse=pellentesque&accumsan=quisque&tortor=porta&quis=volutpat&turpis=erat&sed=quisque",
    author: "Maighdiln Vosper",
    likes: 2667
  }
]

const valid_data = {
  title: "On Top of the Whale (Het dak van de Walvis)",
  url:
    "https://hc360.com/faucibus/orci.jpg?tincidunt=mi&ante=integer&vel=ac&ipsum=neque&praesent=duis&blandit=bibendum&lacinia=morbi&erat=non&vestibulum=quam&sed=nec&magna=dui&at=luctus&nunc=rutrum&commodo=nulla&placerat=tellus&praesent=in&blandit=sagittis&nam=dui&nulla=vel&integer=nisl&pede=duis&justo=ac&lacinia=nibh&eget=fusce&tincidunt=lacus&eget=purus&tempus=aliquet&vel=at&pede=feugiat&morbi=non&porttitor=pretium&lorem=quis&id=lectus&ligula=suspendisse&suspendisse=potenti&ornare=in&consequat=eleifend&lectus=quam&in=a&est=odio",
  author: "Farrell Norquay",
  likes: 7055
}

const invalid_data = {
  url:
    "https://hc360.com/faucibus/orci.jpg?tincidunt=mi&ante=integer&vel=ac&ipsum=neque&praesent=duis&blandit=bibendum&lacinia=morbi&erat=non&vestibulum=quam&sed=nec&magna=dui&at=luctus&nunc=rutrum&commodo=nulla&placerat=tellus&praesent=in&blandit=sagittis&nam=dui&nulla=vel&integer=nisl&pede=duis&justo=ac&lacinia=nibh&eget=fusce&tincidunt=lacus&eget=purus&tempus=aliquet&vel=at&pede=feugiat&morbi=non&porttitor=pretium&lorem=quis&id=lectus&ligula=suspendisse&suspendisse=potenti&ornare=in&consequat=eleifend&lectus=quam&in=a&est=odio",
  author: "Farrell Norquay",
  likes: 7055
}

const data_without_likes = {
  title: "1984",
  url:
    "https://hc360.com/faucibus/orci.jpg?tincidunt=mi&ante=integer&vel=ac&ipsum=neque&praesent=duis&blandit=bibendum&lacinia=morbi&erat=non&vestibulum=quam&sed=nec&magna=dui&at=luctus&nunc=rutrum&commodo=nulla&placerat=tellus&praesent=in&blandit=sagittis&nam=dui&nulla=vel&integer=nisl&pede=duis&justo=ac&lacinia=nibh&eget=fusce&tincidunt=lacus&eget=purus&tempus=aliquet&vel=at&pede=feugiat&morbi=non&porttitor=pretium&lorem=quis&id=lectus&ligula=suspendisse&suspendisse=potenti&ornare=in&consequat=eleifend&lectus=quam&in=a&est=odio",
  author: "me"
}

module.exports = {
  initialBlogs,
  valid_data,
  invalid_data,
  data_without_likes
}
