let sizes = [
    {
        width: "350px",
        height: "250px"
    },
    {
        width: "350px",
        height: "550px"
    },
    {
        width: "100%",
        height: "80px"
    }
];

let colors = [
    // black
    "#000000",
    // red
    "#ed3833",
    // yellow
    "#facd48",
    // green
    "#5cc75b",
    // blue
    "#1579f6",
    // brown
    "#a2845e",
    // white
    "#ffffff"
];

class Banner {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    createBanner() {
        const div = document.createElement('div');
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.backgroundColor = this.color;
        div.classList.add("ad");

        div.innerHTML = `
            <div class="adLabel">РЕКЛАМА</div>
            <div class="infoIcon">
                <svg viewBox="0 0 320 320" version="1.1" width="320" height="320" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                    <path style="fill:#000000" d="M 128.001 32.011 C 127.999 25.253 130.137 18.665 134.108 13.197 C 138.08 7.728 143.683 3.656 150.11 1.568 C 156.537 -0.521 163.463 -0.521 169.89 1.568 C 176.317 3.656 181.92 7.728 185.892 13.197 C 189.863 18.665 192.001 25.253 191.999 32.011 C 192.001 38.769 189.863 45.357 185.892 50.825 C 181.92 56.293 176.317 60.365 169.89 62.454 C 163.463 64.543 156.537 64.543 150.11 62.454 C 143.683 60.365 138.08 56.293 134.108 50.825 C 130.137 45.357 127.999 38.769 128.001 32.011 Z">
                    <animate class="dotAnimation" attributeType="CSS" attributeName="opacity" 
                        from="1" dur="0.3s" fill="freeze" repeatCount="1"/>
                    </path>
                    <path style="fill:#000000" d="M 117.335 106.675 L 160.384 106.675 C 172.095 106.675 181.524 116.104 181.524 127.815 L 181.524 128.199 C 181.524 139.911 172.095 149.34 160.384 149.34 L 117.335 149.34 C 105.623 149.34 96.194 139.911 96.194 128.199 L 96.194 127.815 C 96.194 116.104 105.623 106.675 117.335 106.675 Z">
                    <animate class="topSerifAnimation" dur="0.3s" repeatCount="1" fill="freeze" attributeName="d"/>
                    </path>
                    <path style="fill:#000000" d="M 138.667 299.818 L 138.667 126.858 C 138.667 115.677 147.669 106.676 158.849 106.676 L 161.151 106.676 C 172.331 106.676 181.333 115.677 181.333 126.858 L 181.333 299.818 C 181.333 310.999 172.331 320 161.151 320 L 158.849 320 C 147.669 320 138.667 310.999 138.667 299.818 Z">
                    <animate class="verticalLineAnimation" dur="0.3s" repeatCount="1" fill="freeze" attributeName="d"/>
                    </path>
                    <path style="fill:#000000" d="M 116.951 277.335 L 203.049 277.335 C 214.654 277.335 223.998 286.678 223.998 298.284 L 223.998 299.051 C 223.998 310.657 214.654 320 203.049 320 L 116.951 320 C 105.346 320 96.002 310.657 96.002 299.051 L 96.002 298.284 C 96.002 286.678 105.346 277.335 116.951 277.335 Z">
                    <animate class="bottomSerifAnimation" attributeType="CSS" attributeName="opacity" 
                        from="1" dur="0.3s" fill="freeze" repeatCount="1"/>
                    </path>
                </svg>
            </div>
            <div class="adMarking">
                <div class="adMarkingContent">
                    <h6>Реклама</h6>
                    <p>ООО AdRiver</p>
                    <p>Erid: 5UGfwMukZ5</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere odio, architecto illo
                        perspiciatis eveniet pariatur delectus deserunt minima libero ut recusandae illum quos laudantium
                        harum id exercitationem voluptas natus?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, nihil tempore, incidunt facilis
                        architecto aut quam provident minus, accusamus non assumenda sed accusantium? Consectetur nulla eum
                        necessitatibus omnis provident perspiciatis.</p>
                </div>
            </div>
        `;

        // Добавление баннеров одного размера в общую секцию
        let sections = document.getElementsByTagName("section");
        sections[sections.length - 1].appendChild(div);

        // Меню. Размер меню плавно меняется при открытии
        const adMarking = div.getElementsByClassName("adMarking")[0];
        
        // Контент внутри меню. Ему устанавливается постоянный размер при загрузке страницы
        const adMarkingContent = div.getElementsByClassName("adMarkingContent")[0];
        const infoIcon = div.getElementsByClassName("infoIcon")[0];

        // Теги <animate> каждого path для его анимации
        const dotAnimation = div.getElementsByClassName("dotAnimation")[0];
        const topSerifAnimation = div.getElementsByClassName("topSerifAnimation")[0];
        const verticalLineAnimation = div.getElementsByClassName("verticalLineAnimation")[0];
        const bottomSerifAnimation = div.getElementsByClassName("bottomSerifAnimation")[0];

        let isMenuOpened = false;

        // Получение реальных размеров открытого меню
        let adMarkingWidth = adMarking.offsetWidth;
        let adMarkingHeight = adMarking.offsetHeight;

        // Соотношение сторон меню
        let adMarkingRatio = Math.max(adMarkingWidth, adMarkingHeight) / Math.min(adMarkingWidth, adMarkingHeight);

        // На узких div большой border-radius, заданный в процентах, вызывает некрасивую деформацию тега
        // Для таких случаев задаётся border-radius 12px
        adMarking.style.borderRadius = adMarkingRatio > 1.5 ? "12px" : "50%";
        adMarking.style.borderTopRightRadius = "12px";

        // Задаётся постоянный размер для контента внутри меню
        // Это позволяет избежать "бегающих" слов при анимации изменения размера родительского тега
        adMarkingContent.style.width = adMarkingWidth + "px";
        adMarkingContent.style.height = adMarkingHeight + "px";

        // Уменьшение размера меню при установке постоянного размера для контента внутри меню
        adMarking.style.width = "24px";
        adMarking.style.height = "24px";

        // Открытие и закрытие меню
        infoIcon.onclick = () => {

            if (isMenuOpened) {

                // Разные классы для плавной анимации
                adMarking.classList.add("adMarkingHidden")
                adMarking.classList.remove("adMarkingVisible");
                adMarking.style.width = "24px";
                adMarking.style.height = "24px";

                // Анимация появления точки
                dotAnimation.setAttribute("from", "0");
                dotAnimation.setAttribute("to", "1");

                // Анимация превращения засечки
                topSerifAnimation.setAttribute("from", "M 46.727 243.104 L 243.104 46.727 C 251.386 38.446 264.72 38.446 273.001 46.727 L 273.273 46.999 C 281.554 55.28 281.554 68.614 273.273 76.896 L 76.896 273.273 C 68.614 281.554 55.28 281.554 46.999 273.273 L 46.727 273.001 C 38.446 264.72 38.446 251.386 46.727 243.104 Z");
                topSerifAnimation.setAttribute(
                    "to",
                    "M 117.335 106.675 L 160.384 106.675 C 172.095 106.675 181.524 116.104 181.524 127.815 L 181.524 128.199 C 181.524 139.911 172.095 149.34 160.384 149.34 L 117.335 149.34 C 105.623 149.34 96.194 139.911 96.194 128.199 L 96.194 127.815 C 96.194 116.104 105.623 106.675 117.335 106.675 Z"
                );

                // Анимация превращения вертикальной линии
                verticalLineAnimation.setAttribute(
                    "from",
                    "M 243.774 273.943 L 46.057 76.226 C 38.151 68.32 38.151 55.59 46.057 47.684 L 47.684 46.057 C 55.59 38.151 68.32 38.151 76.226 46.057 L 273.943 243.774 C 281.849 251.68 281.849 264.41 273.943 272.316 L 272.316 273.943 C 264.41 281.849 251.68 281.849 243.774 273.943 Z"
                );
                verticalLineAnimation.setAttribute(
                    "to",
                    "M 138.667 299.818 L 138.667 126.858 C 138.667 115.677 147.669 106.676 158.849 106.676 L 161.151 106.676 C 172.331 106.676 181.333 115.677 181.333 126.858 L 181.333 299.818 C 181.333 310.999 172.331 320 161.151 320 L 158.849 320 C 147.669 320 138.667 310.999 138.667 299.818 Z"
                );

                // Анимация появления нижней засечки
                bottomSerifAnimation.setAttribute("from", "0");
                bottomSerifAnimation.setAttribute("to", "1");

            } else {

                // Разные классы для плавной анимации
                adMarking.classList.remove("adMarkingHidden")
                adMarking.classList.add("adMarkingVisible");

                // Появление меню
                adMarking.style.width = adMarkingWidth + "px";
                adMarking.style.height = adMarkingHeight + "px";

                // Анимация исчезновения точки
                dotAnimation.setAttribute("from", "1");
                dotAnimation.setAttribute("to", "0");

                // Анимация превращения засечки
                topSerifAnimation.setAttribute(
                    "from",
                    "M 117.335 106.675 L 160.384 106.675 C 172.095 106.675 181.524 116.104 181.524 127.815 L 181.524 128.199 C 181.524 139.911 172.095 149.34 160.384 149.34 L 117.335 149.34 C 105.623 149.34 96.194 139.911 96.194 128.199 L 96.194 127.815 C 96.194 116.104 105.623 106.675 117.335 106.675 Z"
                );
                topSerifAnimation.setAttribute(
                    "to",
                    "M 46.727 243.104 L 243.104 46.727 C 251.386 38.446 264.72 38.446 273.001 46.727 L 273.273 46.999 C 281.554 55.28 281.554 68.614 273.273 76.896 L 76.896 273.273 C 68.614 281.554 55.28 281.554 46.999 273.273 L 46.727 273.001 C 38.446 264.72 38.446 251.386 46.727 243.104 Z"
                );

                // Анимация превращения вертикальной линии
                verticalLineAnimation.setAttribute(
                    "from",
                    "M 138.667 299.818 L 138.667 126.858 C 138.667 115.677 147.669 106.676 158.849 106.676 L 161.151 106.676 C 172.331 106.676 181.333 115.677 181.333 126.858 L 181.333 299.818 C 181.333 310.999 172.331 320 161.151 320 L 158.849 320 C 147.669 320 138.667 310.999 138.667 299.818 Z"
                );
                verticalLineAnimation.setAttribute(
                    "to",
                    "M 243.774 273.943 L 46.057 76.226 C 38.151 68.32 38.151 55.59 46.057 47.684 L 47.684 46.057 C 55.59 38.151 68.32 38.151 76.226 46.057 L 273.943 243.774 C 281.849 251.68 281.849 264.41 273.943 272.316 L 272.316 273.943 C 264.41 281.849 251.68 281.849 243.774 273.943 Z"
                );

                // Анимация исчезновения нижней засечки
                bottomSerifAnimation.setAttribute("from", "1");
                bottomSerifAnimation.setAttribute("to", "0");

            }

            // Запуск анимаций
            dotAnimation.beginElement();
            topSerifAnimation.beginElement();
            verticalLineAnimation.beginElement();
            bottomSerifAnimation.beginElement();

            isMenuOpened = !isMenuOpened;
        }
    }


}

// Генерация div
for (let size of sizes) {
    document.body.appendChild(document.createElement("section"))
    for (let color of colors) {
        new Banner(size.width, size.height, color).createBanner();
    }
}