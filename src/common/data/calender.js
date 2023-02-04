const date = new Date();
const d = date.getDate();
const m = date.getMonth();
const y = date.getFullYear();

var events = [{
  title: 'Gelar P5 Kelas 11',
  start: new Date(y, m, 1),
  className : 'text-white'
},
{
  title: 'Mars BNN',
  start: new Date(y, m, d - 5),
  end: new Date(y, m, d - 2),
  className: 'bg-warning text-white'
},
{
  id: 999,
  title: 'Isra Miraj',
  start: new Date(y, m, d - 3, 16, 0),
  allDay: false,
  className: 'bg-info text-white'
},
{
  id: 999,
  title: 'Video Perpisahan Kelas 12',
  start: new Date(y, m, d + 4, 16, 0),
  allDay: false,
  className: 'bg-primary text-white'
},
{
  title: 'Syuting Video',
  start: new Date(y, m, d, 10, 30),
  allDay: false,
  className: 'bg-success text-white'
},
{
  title: 'Uji Kompetensi Kelas 12',
  start: new Date(y, m, d, 12, 0),
  end: new Date(y, m, d, 14, 0),
  allDay: false,
  className: 'bg-danger text-white'
},
{
  title: 'Penilaian Kinerja Guru',
  start: new Date(y, m, d + 1, 19, 0),
  end: new Date(y, m, d + 1, 22, 30),
  allDay: false,
  className: 'bg-success text-white'
}];

const calenderDefaultCategories = [
  {
    id: 1,
    title: "Event Siswa",
    type: "bg-success",
  },
  {
    id: 2,
    title: "Event Guru",
    type: "bg-info",
  },
  {
    id: 3,
    title: "Event Sekolah",
    type: "bg-warning",
  },
  {
    id: 4,
    title: "Event Jurusan",
    type: "bg-danger",
  },
]

export { calenderDefaultCategories, events }
