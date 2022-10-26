

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    yourName: "K.VIJAY KAMAL!", // Insert your name
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "https://discordapp.com/users/LYNX#3267"  //  url of the Social Network
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
    description: "I'm a final year computer science undergraduate student with a keen interest towards data science. I'm currently doing a certified course on 'FULL STACK DATA SCIENCE' from 'INeuron' and I love to browse through problem statements and implement those during my spare time. Checkout my projects at Github link above.",
    titleURL: "View Resume",
    urlCV: "#"
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
        title: "Lung Cancer Detection Using CNN",    // card image  > insert the svg image in the assets folder
        describe: "Lung Cancer is one of the leading life taking cancer worldwide. Early detection and treatment are crucial for patient recovery. Medical professionals use histopathological images of biopsied tissue from potentially infected areas of lungs for diagnosis. Most of the time, the diagnosis regarding the types of lung cancer are error-prone and time-consuming. Convolutional Neural networks can identify and classify lung cancer types with greater accuracy in a shorter period, which is crucial for determining patients' right treatment procedure and their survival rate. Benign tissue, Adenocarcinoma, and squamous cell carcinoma are considered in this research work. The CNN model training and validation accuracy of 99.83 and 97.83 percentage are obtained",
        url: "https://github.com/vijaykhv/Lung-Cancer-Detection-Using-CNN",  // url of the Github repository
        img: "https://i.ibb.co/tHF7cXp/3.png"//image Project
    },
    // {
    //     title: "PROJECT TITLE",
    //     describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
    //     url: "#",
    //     img: "assets/project1.jpg"
    // },
    // {
    //     title: "PROJECT TITLE",
    //     describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
    //     url: "#",
    //     img: "assets/project1.jpg"
    // }
]








