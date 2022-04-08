var pathname = window.location.pathname;

if(pathname = "/cita_meet"){
    navigator.mediaDevices.getUserMedia({audio : true, video : true}).then((stream)=>{
        let video = document.getElementById('video');

        myStream = stream;
        video.srcObject = myStream;
        video.onloadedmetadata = (ev) => video.play();

    }).catch((err)=>console.log(err))


    var btn_cam = document.getElementById("btn_cam");
    var btn_cam_i = document.getElementById("btn_cam_i");

    btn_cam.onclick = function(){

        myStream.getVideoTracks()[0].enabled = !(myStream.getVideoTracks()[0].enabled);

        btn_cam_i.classList.toggle("fa-video");
        btn_cam_i.classList.toggle("fa-video-slash");

        btn_cam.classList.toggle("active_btn_video");
        
    }

    var btn_mic = document.getElementById("btn_mic");
    var btn_mic_i = document.getElementById("btn_mic_i");

    btn_mic.onclick = function(){
        myStream.getAudioTracks()[0].enabled = !(myStream.getAudioTracks()[0].enabled);

        btn_mic_i.classList.toggle("fa-microphone");
        btn_mic_i.classList.toggle("fa-microphone-slash");

        btn_mic.classList.toggle("active_btn_video");
    }
};



