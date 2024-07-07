        var f =  false;
        var time212 =false;
        var ref= true;

        var pereslo = 0;
        var zaregali = 52;


        function updateValues() {
            document.getElementById('peresloValue').textContent = pereslo;
            document.getElementById('zaregaliValue').textContent = zaregali;
        }
        updateValues();

        setTimeout(function() {
            document.getElementById('1load').style.display = 'none';
            document.getElementById('loadmain').style.display = 'block';

           if (f) {
                document.getElementById('loadmain').style.display = 'none';
                document.getElementById('submain').style.display = 'block';
            } else if (time212) {
                document.getElementById('loadmain').style.display = 'none';
                document.getElementById('prizemain').style.display = 'block';
            } else if (ref) {
                document.getElementById('loadmain').style.display = 'none';
                document.getElementById('refmain').style.display = 'block';
            }
        }, 1000);
        async function sendFetch(url, dataF = {}) {
            try {
              const data = await fetch(url, {
                method: 'POST',
                headers: {
                   'Content-Type': 'application/json',
                   'X-Auth-Hash': window.Telegram.WebApp.initData
                },
                body: JSON.stringify(dataF)
              })
              const json = await data.json()
              return json
            } catch(e) {
              console.log(e)
            }

          }

        window.Telegram.WebApp.ready(function() {
            const user = window.Telegram.WebApp.initDatasafe.user;
            if (user) {
                const userId = user.id;
                const firstName = user.first_name;
                const lastName = user.last_name;

                console.log(`ID: ${userId}`);
                console.log(`Имя: ${firstName}`);
                console.log(`Фамилия: ${lastName}`);
            }
        });

        function sendMessage() {
            if (window.Telegram && window.Telegram.WebApp) {
                window.Telegram.WebApp.sendData("Hello, Telegram!");
            } else {
                alert("Telegram WebApp is not available.");
            }
        }

        function openModal(modalId) {
            var modal = document.getElementById(modalId);
            modal.style.display = 'block';
        }

        function closeModal(modalId) {
            var modal = document.getElementById(modalId);
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            var modals = document.querySelectorAll('.modal');
            modals.forEach(function(modal) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });
        }

        function changeBackgroundColor(newColor) {
            const root = document.documentElement;
            root.style.setProperty('--circle21-bg-color', newColor);
        }

        function changeBackgroundColor(newColor) {
            const root = document.documentElement;
            root.style.setProperty('--circle-bg-color', newColor);
        }