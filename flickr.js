const url = "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList";
const key = "d3a59f3de2002f82961ea79d60471f4d";
let result = '';


$.ajax({
    url: url,
    dataType: "json",
    data: {
        api_key: key,
        per_page: 5,
        format: "json",
        nojsoncallback: 1
    }
})
.success(function(data){ 
    const items = data.photos.photo;
    console.log(items);

    $(items).each(function(index, data){
        const imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;
        const imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.attrsecret}_b.jpg`;
        $("#gallery ul").append(
            $("<li>").append(
                $("<a>").attr({"href": imgSrcBig}).append(
                    $("<img>").attr({"src":imgSrc})
                ),
                $("<h1>").text(data.title)
            )
        )
    })
   
})
.error(function(err){
    console.error(err);
})