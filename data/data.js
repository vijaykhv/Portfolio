

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    yourName: "VIJAY KAMAL K!", // Insert your name
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "mailto:vijaykamalkhv@gmail.com"  //  url of the Social Network
        },
        {
            icon: "fa fa-linkedin", // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Linkedin",
            url: "https://www.linkedin.com/in/vijay-khv-1779a9207/"
        },
        {
            icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Github",
            url: "https://github.com/vijaykhv"
        }


    ],

    // Page session direction
    nav: [
        {
            optionNav: "About me",
            idSection: "about"    // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Skills",
            idSection: "skills"   // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Projects",
            idSection: "projects"  // If it changes, check the session id in <index.html> ;
        }


    ]

}


//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
    title: "ABOUT ME",
    description: "Hey there! I'm Vijay, currently pursuing my master's in data science. I'm passionate about diving into problem statements and crafting innovative solutions using data-driven approaches. When I'm not buried in coursework, you'll often find me tinkering with projects in my spare time. I love putting theory into practice and seeing real-world results. Curious about my work? Check out my projects on GitHub. Let's chat about all things data science!",
    titleURL: "View Resume",
    urlCV: "assets/Resume.pdf"
}




//=========================================
//                 SKILLS 
//=========================================
export const skillsData = [


    {
        img: "assets/python.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "Python"      //  card name
    },
    {
        img: "assets/tensorflow.svg",
        nameSkill: "Tensorflow"
    },
    {
        img: "assets/git.svg",
        nameSkill: "Git"
    },
    {
        img: "assets/opencv.svg",
        nameSkill: "OpenCV"
    },
    {
        img: "assets/tableau.svg",
        nameSkill: "Tableau"
    },
    {
        img: "assets/r.svg",
        nameSkill: "R"
    },
    {
        img: "assets/unix.svg",
        nameSkill: "Unix"
    },
    {
        img: "assets/matlab.svg",
        nameSkill: "matlab"
    },
    {
        img: "assets/html-5.svg",
        nameSkill: "HTML"
    },
    {
        img: "assets/css3.svg",
        nameSkill: "CSS"
    },
    {
        img: "assets/java.svg",
        nameSkill: "JAVA"
    },
    {
        img: "assets/c.svg",
        nameSkill: "C"
    }


]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    {
        title: "Crime Trends and Patterns in the United States (1979-2019)",    // card image  > insert the svg image in the assets folder
        describe: "Developed an interactive web-based visualization using D3.js to analyze and present crime data across four decades. Incorporated cartograms and choropleths to reveal geographic patterns and highlighted socio-economic factors influencing crime trends.",
        url: "https://vijaykhv.github.io/DV-Final-Project/",  // url of the Github repository
        img: "https://i.ibb.co/DzXrNSF/Screenshot-2024-12-26-at-2-40-44-AM.png"//image Project
    },
    {
        title: "Lung Cancer Detection Using CNN",    // card image  > insert the svg image in the assets folder
        describe: "Lung Cancer is one of the leading life taking cancer worldwide. Early detection and treatment are crucial for patient recovery. Medical professionals use histopathological images of biopsied tissue from potentially infected areas of lungs for diagnosis. Benign tissue, Adenocarcinoma, and squamous cell carcinoma are considered in this project. The CNN model training and validation accuracy of 87.92 and 86.83 percentage are obtained",
        url: "https://github.com/vijaykhv/Lung-Cancer-Detection-Using-CNN",  // url of the Github repository
        img: "https://i.ibb.co/tHF7cXp/3.png"//image Project
    },
    {
        title: "UBER FARE PREDICTION USING MACHINE LEARNING MODEL",
        describe: "In this project, we aim to predict Uber ride fare prices using regression models. We start by cleaning up the dataset, handling missing values, and removing outliers. Then, we build regression models and evaluate their performance using metrics like R2 and RMSE. Our goal is to develop accurate models to help estimate fare prices effectively.",
        url: "https://github.com/vijaykhv/Uber-Price-Prediction.git",
        img: "https://i.ibb.co/KGpPSRY/main.png"
    },
    // {
    //     title: "PROJECT TITLE",
    //     describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
    //     url: "#",
    //     img: "assets/project1.jpg"
    // }
]








