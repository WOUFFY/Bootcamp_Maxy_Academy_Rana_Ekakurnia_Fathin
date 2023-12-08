const baseContainer = document.getElementById("app"); // menyimpan element html dengan id app
const addNoteBtn = baseContainer.querySelector(".add-note"); // untuk menambahkan button baru ke dalam element html dengan id app

getNotes().forEach(notes => { //melkukan iterasi untuk menampilkan seluruh note yang tersimpan dalam local storage dalam bentuk JSON
    const noteElement = createNoteElement(notes.id, notes.content);
    baseContainer.insertBefore(noteElement, addNoteBtn); // menambahkan note sebelum tombol atau sebelum fungsi menambahkan tombol
});

addNoteBtn.addEventListener("click", ()=>{ // ketika add button diklik maka akan menambahkan note baru
    addNotes();
});

function getNotes(){
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]"); // untuk mengambil note yang disimpan dalam local storage browser dengan key stickynotes-notes, jika kosong akan mengembalikan array kosong
}

function saveNotes(notes){
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes)); // menyinopan notes ke dlam local storage dengan key stickynotes-notes dan diubah ke dalam format JSON
}

function createNoteElement(id, content){
    const element = document.createElement("textarea"); // membuat element textarea baru
    element.classList.add("note"); //memberikan class note agar terbaca dengan css
    element.value = content; // mengisi value berdasarkan parameter dari fungsi
    element.placeholder = "click untuk menulis, double click untuk menghapus, click diluar note untuk save perubahan";
    
    element.addEventListener("change", ()=>{
        updateNotes(id, element.value); // jika user mengganti isi dari note maka fungsi update akan dipanggil
    });

    element.addEventListener("dblclick", ()=>{
        const doDelete = confirm("Are you sure to delete this note?");
        if(doDelete){
            deleteNotes(id, element); // jika user setuju untuk menghapus note maka fungsi menghapus note akan dipanggil
        }
    });

    return element;
}

function addNotes(){
    const notes = getNotes(); // untuk mendapatkan semua notes dalam local storage browser
    const noteObject = {
        id: Math.floor(Math.random() * 100000), // generate new id
        content: ""
    };

    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    baseContainer.insertBefore(noteElement, addNoteBtn);

    notes.push(noteObject); // memasukkan note baru ke dalam array object
    saveNotes(notes); // menyimpan ke dalam local storage browser
}

function updateNotes(id, newContent){
    const notes = getNotes();
    const targetNotes = notes.filter(notes => notes.id == id)[0]; // mencari notes yang akan diupdate berdasarkan id

    targetNotes.content = newContent;
    saveNotes(notes);

    alert("note berhasil disimpan")
}

function deleteNotes(id, element){
    const notes = getNotes().filter(notes => notes.id != id);
    saveNotes(notes);
    baseContainer.removeChild(element); // menghapuskan textarea
}