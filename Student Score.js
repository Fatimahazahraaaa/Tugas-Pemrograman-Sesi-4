let studentScore = [
    { name: 'Andi', score: 80},
    { name: 'Rudi', score: 90},
    { name: 'Dira', score: 100}
]
// keadaan awal
let studentHighScore = null;
// logic / algoritma
for (index in studentScore){
    // cek jika studentHighScore belum ada datanya
    if (studentHighScore == null){
        studentHighScore = studentScore[index]
    }else{
        // jika datanya ada lakukan komparasi
        if (studentScore[index].score >
            studentHighScore.score){
                studentHighScore = studentScore[index]
        }
    }
}
// goal / keadaan akhir
console.log(studentHighScore)