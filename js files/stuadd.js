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
  

  function storeDetails(){
        var sname=localStorage.getItem('schoolname');
        var rcls=document.getElementById('class').value;
        var rrno=document.getElementById('RollNumber').value;
        var rname=document.getElementById('Name').value;
        var rdob=document.getElementById('dob').value;
        var rgender=document.getElementById('gender').value;
        var rcast=document.getElementById('Cast').value;
        var rfname=document.getElementById('FathersName').value;
        var rfocc=document.getElementById('FathersOccupation').value;
        var rmname=document.getElementById('MotherName').value;
        var rmocc=document.getElementById('MotherOccupation').value;
        var rmobnum=document.getElementById('MoblieNumber').value;
        var radd=document.getElementById('Address').value;
        var ratten=document.getElementById('Attendance').value;
        var rmarks=document.getElementById('Marks').value;
        var ref=database.ref().child('/school/'+sname+'/'+rcls+'/'+rrno);
        var gref=database.ref().child('/counts');
        var fc=-1;
        var mc=-1;
        gref.once('value',function(snap){
            fc=snap.val().female;
            mc=snap.val().male;
            if(rgender=="female"){
                gref.child('/female').set(fc+1);
            }
            else{
              mc=mc+1;
              gref.child('male').set(mc);
            }
        });
        
        ref.set({
            student_name:rname,
            dob:rdob,
            gender:rgender,
            cast:rcast,
            father_name:rfname,
            father_occupation:rfocc,
            mother_name:rmname,
            mother_occupation:rmocc,
            mobileno:rmobnum,
            address:radd,
            attendance:ratten,
            marks:rmarks,
        })
        alert('information is submitted');
  }