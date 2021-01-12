var firebaseConfig = {
    apiKey: "AIzaSyCgW1XkivI_JdUC7NO9baMVtsLaVeXHT5g",
    authDomain: "rch5-83d47.firebaseapp.com",
    databaseURL: "https://rch5-83d47.firebaseio.com",
    projectId: "rch5-83d47",
    storageBucket: "rch5-83d47.appspot.com",
    messagingSenderId: "703615226990",
    appId: "1:703615226990:web:9a72e66a624fbeaa9c027f",
    measurementId: "G-0GMH3QWWEF"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  var database=firebase.database();

  function submit(){
      var sname=localStorage.getItem('schoolname');
      var cls=document.getElementById('class').value;
      var ref=database.ref().child('/school'+'/'+sname+'/'+cls);
      for(i=1;i<=10;i++){
        var atten=document.getElementById('a'+i).value;
        var marks=document.getElementById('m'+i).value;
        if(!(atten.length==0 && marks.length==0)){
            ref.child('/'+i+'/'+'attendance').set(atten);
            ref.child('/'+i+'/'+'marks').set(marks);
        }
        
      }
      alert('changes have been made');
  }