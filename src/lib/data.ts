export interface Reservation {
  id: number;
  guest: string;
  source: string;
  checkIn: string;
  checkOut: string;
  status: string;
  roomNo: string;
  commission: string;
  total: string;
}

export const reservations: Reservation[] = [
  { id: 1, guest: "Aisha Moreno", source: "Expedia", checkIn: "Mar 20", checkOut: "Mar 24", status: "Confirmed", roomNo: "#101", commission: "$180.00", total: "$1,200.00" },
  { id: 2, guest: "Bilal Carter", source: "Direct", checkIn: "Mar 20", checkOut: "Mar 24", status: "Pending", roomNo: "#202", commission: "$160.00", total: "$1,069.00" },
  { id: 3, guest: "Diego Kim", source: "HAFH", checkIn: "Mar 20", checkOut: "Mar 25", status: "Checked in", roomNo: "#303", commission: "$155.00", total: "$1,035.00" },
  { id: 4, guest: "Isabel Flores", source: "Flexible", checkIn: "Mar 20", checkOut: "Mar 27", status: "Cancelled", roomNo: "#404", commission: "$160.00", total: "$1,055.00" },
  { id: 5, guest: "Leon Vasquez", source: "Bilt rate", checkIn: "Mar 20", checkOut: "Mar 28", status: "Confirmed", roomNo: "#505", commission: "$150.00", total: "$1,010.00" },
  { id: 6, guest: "Noura Bennett", source: "Flexible", checkIn: "Mar 25", checkOut: "Mar 29", status: "Pending", roomNo: "#606", commission: "$155.00", total: "$1,015.00" },
  { id: 7, guest: "Malik Johansson", source: "Non-refundable", checkIn: "Mar 26", checkOut: "Mar 30", status: "Checked in", roomNo: "#707", commission: "$160.00", total: "$1,063.00" },
  { id: 8, guest: "Tariq Feldman", source: "Expedia", checkIn: "Mar 27", checkOut: "Mar 31", status: "Cancelled", roomNo: "#808", commission: "$150.00", total: "$1,005.00" },
  { id: 9, guest: "William Okafor", source: "Non-refundable", checkIn: "Mar 28", checkOut: "Apr 1", status: "Confirmed", roomNo: "#909", commission: "$180.00", total: "$1,205.00" },
  { id: 10, guest: "Joshua Moreno", source: "Direct", checkIn: "Mar 29", checkOut: "Apr 2", status: "Pending", roomNo: "#1010", commission: "$160.00", total: "$1,067.00" },
];

// Guests checking in today
export const checkingInToday: Reservation[] = [
  { id: 11, guest: "Priya Sharma", source: "Direct", checkIn: "Mar 26", checkOut: "Mar 30", status: "Confirmed", roomNo: "#108", commission: "$170.00", total: "$1,150.00" },
  { id: 12, guest: "Carlos Rivera", source: "Expedia", checkIn: "Mar 26", checkOut: "Mar 29", status: "Confirmed", roomNo: "#215", commission: "$140.00", total: "$980.00" },
  { id: 13, guest: "Fatima Al-Rashid", source: "HAFH", checkIn: "Mar 26", checkOut: "Apr 1", status: "Confirmed", roomNo: "#310", commission: "$190.00", total: "$1,320.00" },
  { id: 14, guest: "James O'Brien", source: "Bilt rate", checkIn: "Mar 26", checkOut: "Mar 28", status: "Confirmed", roomNo: "#422", commission: "$120.00", total: "$850.00" },
  { id: 15, guest: "Yuki Tanaka", source: "Flexible", checkIn: "Mar 26", checkOut: "Mar 31", status: "Confirmed", roomNo: "#503", commission: "$165.00", total: "$1,090.00" },
];

// Guests checking out today
export const checkingOutToday: Reservation[] = [
  { id: 16, guest: "Elena Petrov", source: "Direct", checkIn: "Mar 22", checkOut: "Mar 26", status: "Checked in", roomNo: "#112", commission: "$160.00", total: "$1,080.00" },
  { id: 17, guest: "Samuel Mensah", source: "Expedia", checkIn: "Mar 23", checkOut: "Mar 26", status: "Checked in", roomNo: "#218", commission: "$130.00", total: "$920.00" },
  { id: 18, guest: "Lena Johansson", source: "Non-refundable", checkIn: "Mar 24", checkOut: "Mar 26", status: "Checked in", roomNo: "#305", commission: "$110.00", total: "$780.00" },
];

// Past reservations (completed stays)
export const pastReservations: Reservation[] = [
  { id: 101, guest: "Hannah Mitchell", source: "Direct", checkIn: "Feb 10", checkOut: "Feb 14", status: "Completed", roomNo: "#101", commission: "$175.00", total: "$1,180.00" },
  { id: 102, guest: "Ravi Patel", source: "Expedia", checkIn: "Feb 12", checkOut: "Feb 16", status: "Completed", roomNo: "#204", commission: "$160.00", total: "$1,045.00" },
  { id: 103, guest: "Sofia Andersson", source: "HAFH", checkIn: "Feb 15", checkOut: "Feb 20", status: "Completed", roomNo: "#307", commission: "$200.00", total: "$1,350.00" },
  { id: 104, guest: "Omar Hassan", source: "Bilt rate", checkIn: "Feb 18", checkOut: "Feb 22", status: "Completed", roomNo: "#410", commission: "$145.00", total: "$990.00" },
  { id: 105, guest: "Mei Chen", source: "Flexible", checkIn: "Feb 20", checkOut: "Feb 25", status: "Completed", roomNo: "#512", commission: "$185.00", total: "$1,250.00" },
  { id: 106, guest: "Thomas Weber", source: "Non-refundable", checkIn: "Feb 22", checkOut: "Feb 26", status: "Completed", roomNo: "#605", commission: "$155.00", total: "$1,020.00" },
  { id: 107, guest: "Amara Osei", source: "Direct", checkIn: "Feb 25", checkOut: "Mar 1", status: "Completed", roomNo: "#708", commission: "$170.00", total: "$1,140.00" },
  { id: 108, guest: "Lucas Martin", source: "Expedia", checkIn: "Mar 1", checkOut: "Mar 5", status: "Completed", roomNo: "#201", commission: "$150.00", total: "$1,010.00" },
  { id: 109, guest: "Aiko Yamamoto", source: "HAFH", checkIn: "Mar 3", checkOut: "Mar 8", status: "Completed", roomNo: "#314", commission: "$195.00", total: "$1,300.00" },
  { id: 110, guest: "David Kowalski", source: "Flexible", checkIn: "Mar 5", checkOut: "Mar 10", status: "Completed", roomNo: "#415", commission: "$180.00", total: "$1,210.00" },
  { id: 111, guest: "Nina Ivanova", source: "Bilt rate", checkIn: "Mar 8", checkOut: "Mar 12", status: "Cancelled", roomNo: "#509", commission: "$140.00", total: "$960.00" },
  { id: 112, guest: "Kwame Asante", source: "Non-refundable", checkIn: "Mar 10", checkOut: "Mar 14", status: "Completed", roomNo: "#611", commission: "$165.00", total: "$1,100.00" },
  { id: 113, guest: "Clara Rodriguez", source: "Direct", checkIn: "Mar 12", checkOut: "Mar 16", status: "Completed", roomNo: "#102", commission: "$175.00", total: "$1,175.00" },
  { id: 114, guest: "Ahmed Khalil", source: "Expedia", checkIn: "Mar 14", checkOut: "Mar 18", status: "Completed", roomNo: "#220", commission: "$155.00", total: "$1,040.00" },
  { id: 115, guest: "Eva Lindqvist", source: "Flexible", checkIn: "Mar 15", checkOut: "Mar 19", status: "Completed", roomNo: "#318", commission: "$160.00", total: "$1,070.00" },
];
