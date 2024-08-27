// بحث في الجدول
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    const table = document.getElementById('habilitationsTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].innerText.toLowerCase().indexOf(filter) > -1) {
                match = true;
                break;
            }
        }
        rows[i].style.display = match ? '' : 'none';
    }
});
    <script>
        function loadProfile() {
            const sheetURL = 'https://docs.google.com/spreadsheets/d/12sGG2la7TRlcLqMEWRmt0_dRmbwCGfN4S83Jl7RQ7qY/pub?gid=1526610779&single=true&output=csv';
            fetch(sheetURL)
                .then(response => response.text())
                .then(data => {
                    const rows = data.split('\n').slice(1); // Skip header row
                    const urlParams = new URLSearchParams(window.location.search);
                    const matricule = urlParams.get('NomPrénom');

                    let profile = {};
                    rows.forEach(row => {
                        const columns = row.split(/,(?![^"]"(?:(?:[^"]"){2})[^"]$)/);
                        if (columns.length >= 4 && columns[o] ===  NomPrénom) { // Assuming photo is the 8th column
                            profile = {
                                NomPrénom: columns[0],
                                Habilitation: columns[3],
                            };
                        }
                    });

                    if (profile.nom) {
                        document.getElementById('NomPrénom').textContent = profile.NomPrénom;
                        document.getElementById('Habilitation').textContent = profile.Habilitation;

                        // Display the photo
                        document.getElementById('profilePhoto').src = profile.photo;

                        const table = document.getElementById('Habilitation');
                        profile.habilitations.forEach((habilitation, index) => {
                            const newRow = table.insertRow();
                            const cell1 = newRow.insertCell(0);
                            const cell2 = newRow.insertCell(1);
                            const cell3 = newRow.insertCell(2);

                            cell1.textContent = index + 1;
                            cell2.textContent = habilitation.trim();
                            cell3.textContent = profile.expirationDates[index] || '';
                        });
                    } else {
                        alert('No profile found for the given matricule.');
                    }
                });
        }

        window.onload = loadProfile;
    </script>
