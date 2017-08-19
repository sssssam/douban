$(function() {
    $.get('assets/json/my.json', function(data) {
        var str = "";
        for (var i = 0; i < data.albums.length; i++) {
            str += `
                <li>
                    <div class="pic">
                        <a href="#">
                            <img src="${data.albums[i].image}"
                        </a>
                    </div>
                    <a href="#">${data.albums[i].title}</a>
                    <span>${data.albums[i].num}张照片</span>
                </li>
            `;
        }
        $('.picture').append(str);
        var str2 = "";
        for (var j = 0; j < data.notes.length; j++) {
            str2 += `
                <li>
                    <a href="#">${data.notes[j].title}</a>
                </li>
            `;
        }
        $('.note').append(str2);
        var str3 = "";
        for (var k = 0; k < data.slide.length; k++) {
            str3 += `
                <li>
                    <a href="#">${data.slide[k].title}</a>
                    <span class="rec_topics_label">${data.slide[k].new}</span>
                    <span class="rec_topics_subtitle">${data.slide[k].little}</span>
                </li>
            `;
        }
        $('.slidenews').append(str3);
        var str4 = "";
        for (var m = 0; m < data.times.length; m++) {
            str4 += `
                <li>
                    <a class="cover listen" href="#">
                        <img src="${data.times[m].img}">
                    </a>
                    <a class="title" href="#">${data.times[m].title}</a>
                    <span class="type">${data.times[m].zhuanlan}</span>
                </li>
            `;
        }
        $('.time-list').append(str4);
        var str5 = "";
        for (var n = 0; n < data.rushi.length; n++) {
            str5 += `
                <li>
                    <div class="cover">
                        <a href="#">
                            <img src="${data.rushi[n].image}">
                            <span>${data.rushi[n].time}</span>
                        </a>
                    </div>
                    <a class="video-title" href="#">
                        ${data.rushi[n].title}
                    </a>
                </li>
            `;
        }
        $('.video-rushi').append(str5);
        var str6 = "";
        for (var a = 0; a < data.piezui.length; a++) {
            str6 += `
                <li>
                    <div class="cover">
                        <a href="#">
                            <img src="${data.piezui[a].image}">
                            <span>${data.piezui[a].time}</span>
                        </a>
                    </div>
                    <a class="video-title" href="#">
                        ${data.piezui[a].title}
                    </a>
                </li>
            `;
        }
        $('.video-banzui').append(str6);
    });
});
