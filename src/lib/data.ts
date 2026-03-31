export interface RestaurantCredit {
  amount: number;
  applied: boolean;
}

export interface Reservation {
  id: number;
  guest: string;
  source: string;
  rate: string;
  checkIn: string;
  checkOut: string;
  status: string;
  roomNo: string;
  commission: string;
  total: string;
  commissionable: boolean;
  vip?: boolean;
  credit?: RestaurantCredit;
}

export const reservations: Reservation[] = [
  { id: 1, guest: "Aisha Moreno", source: "Expedia", rate: "Expedia", checkIn: "Mar 20", checkOut: "Mar 24", status: "Confirmed", roomNo: "#101", commission: "$180.00", total: "$1,200.00", commissionable: true, vip: true },
  { id: 2, guest: "Bilal Carter", source: "Direct", rate: "Direct", checkIn: "Mar 20", checkOut: "Mar 24", status: "Pending", roomNo: "#202", commission: "$160.00", total: "$1,069.00", commissionable: true },
  { id: 3, guest: "Diego Kim", source: "Sabre", rate: "HAFH", checkIn: "Mar 20", checkOut: "Mar 25", status: "Checked in", roomNo: "#303", commission: "$155.00", total: "$1,035.00", commissionable: true, credit: { amount: 50, applied: true } },
  { id: 4, guest: "Isabel Flores", source: "Direct", rate: "Flexible", checkIn: "Mar 20", checkOut: "Mar 27", status: "Cancelled", roomNo: "#404", commission: "$0.00", total: "$1,055.00", commissionable: false },
  { id: 5, guest: "Leon Vasquez", source: "Travelport", rate: "Bilt", checkIn: "Mar 20", checkOut: "Mar 28", status: "Confirmed", roomNo: "#505", commission: "$150.00", total: "$1,010.00", commissionable: true, vip: true, credit: { amount: 50, applied: false } },
  { id: 6, guest: "Noura Bennett", source: "Direct", rate: "Flexible", checkIn: "Mar 25", checkOut: "Mar 29", status: "Pending", roomNo: "#606", commission: "$0.00", total: "$1,015.00", commissionable: false },
  { id: 7, guest: "Malik Johansson", source: "Amadeus", rate: "Non-refundable", checkIn: "Mar 26", checkOut: "Mar 30", status: "Checked in", roomNo: "#707", commission: "$160.00", total: "$1,063.00", commissionable: true },
  { id: 8, guest: "Tariq Feldman", source: "Expedia", rate: "Expedia", checkIn: "Mar 27", checkOut: "Mar 31", status: "Cancelled", roomNo: "#808", commission: "$0.00", total: "$1,005.00", commissionable: false },
  { id: 9, guest: "William Okafor", source: "Sabre", rate: "Non-refundable", checkIn: "Mar 28", checkOut: "Apr 1", status: "Confirmed", roomNo: "#909", commission: "$180.00", total: "$1,205.00", commissionable: true },
  { id: 10, guest: "Joshua Moreno", source: "Direct", rate: "Direct", checkIn: "Mar 29", checkOut: "Apr 2", status: "Pending", roomNo: "#1010", commission: "$0.00", total: "$1,067.00", commissionable: false },
  { id: 11, guest: "Camille Rousseau", source: "Travelport", rate: "Virtuoso", checkIn: "Mar 21", checkOut: "Mar 25", status: "Confirmed", roomNo: "#111", commission: "$195.00", total: "$1,310.00", commissionable: true, vip: true, credit: { amount: 100, applied: false } },
  { id: 12, guest: "Henrik Strand", source: "Direct", rate: "Direct", checkIn: "Mar 21", checkOut: "Mar 26", status: "Checked in", roomNo: "#112", commission: "$170.00", total: "$1,145.00", commissionable: true },
  { id: 13, guest: "Yara El-Masri", source: "Amadeus", rate: "HAFH", checkIn: "Mar 21", checkOut: "Mar 24", status: "Pending", roomNo: "#213", commission: "$140.00", total: "$960.00", commissionable: true, credit: { amount: 50, applied: false } },
  { id: 14, guest: "Tomás Herrera", source: "Sabre", rate: "Bilt", checkIn: "Mar 22", checkOut: "Mar 26", status: "Confirmed", roomNo: "#214", commission: "$165.00", total: "$1,100.00", commissionable: true, credit: { amount: 100, applied: false } },
  { id: 15, guest: "Svetlana Kozlov", source: "Direct", rate: "Flexible", checkIn: "Mar 22", checkOut: "Mar 27", status: "Cancelled", roomNo: "#315", commission: "$0.00", total: "$1,230.00", commissionable: false },
  { id: 16, guest: "Kofi Mensah", source: "Travelport", rate: "Non-refundable", checkIn: "Mar 22", checkOut: "Mar 25", status: "Checked in", roomNo: "#316", commission: "$130.00", total: "$890.00", commissionable: true },
  { id: 17, guest: "Ingrid Dahl", source: "Expedia", rate: "Expedia", checkIn: "Mar 23", checkOut: "Mar 28", status: "Confirmed", roomNo: "#417", commission: "$210.00", total: "$1,420.00", commissionable: true, vip: true },
  { id: 18, guest: "Rashid Noor", source: "Direct", rate: "Direct", checkIn: "Mar 23", checkOut: "Mar 26", status: "Pending", roomNo: "#418", commission: "$145.00", total: "$975.00", commissionable: true },
  { id: 19, guest: "Lucia Ferrara", source: "Amadeus", rate: "HAFH", checkIn: "Mar 23", checkOut: "Mar 29", status: "Checked in", roomNo: "#519", commission: "$185.00", total: "$1,260.00", commissionable: true, credit: { amount: 100, applied: true } },
  { id: 20, guest: "Chen Wei", source: "Sabre", rate: "Bilt", checkIn: "Mar 24", checkOut: "Mar 28", status: "Confirmed", roomNo: "#520", commission: "$160.00", total: "$1,080.00", commissionable: true, credit: { amount: 50, applied: false } },
  { id: 21, guest: "Anastasia Popov", source: "Direct", rate: "Flexible", checkIn: "Mar 24", checkOut: "Mar 30", status: "Pending", roomNo: "#621", commission: "$0.00", total: "$1,340.00", commissionable: false },
  { id: 22, guest: "Emmanuel Obi", source: "Travelport", rate: "Non-refundable", checkIn: "Mar 24", checkOut: "Mar 27", status: "Cancelled", roomNo: "#622", commission: "$0.00", total: "$920.00", commissionable: false },
  { id: 23, guest: "Freya Lindgren", source: "Expedia", rate: "Expedia", checkIn: "Mar 25", checkOut: "Mar 29", status: "Confirmed", roomNo: "#723", commission: "$175.00", total: "$1,180.00", commissionable: true },
  { id: 24, guest: "Javier Castillo", source: "Direct", rate: "Direct", checkIn: "Mar 25", checkOut: "Mar 30", status: "Checked in", roomNo: "#724", commission: "$190.00", total: "$1,290.00", commissionable: true, vip: true },
  { id: 25, guest: "Amina Diallo", source: "Amadeus", rate: "HAFH", checkIn: "Mar 25", checkOut: "Mar 28", status: "Pending", roomNo: "#825", commission: "$135.00", total: "$915.00", commissionable: true, credit: { amount: 50, applied: false } },
  { id: 26, guest: "Oliver Schreiber", source: "Sabre", rate: "Bilt", checkIn: "Mar 26", checkOut: "Mar 31", status: "Confirmed", roomNo: "#826", commission: "$200.00", total: "$1,350.00", commissionable: true, credit: { amount: 100, applied: false } },
  { id: 27, guest: "Nadia Volkov", source: "Direct", rate: "Flexible", checkIn: "Mar 26", checkOut: "Apr 1", status: "Checked in", roomNo: "#927", commission: "$0.00", total: "$1,470.00", commissionable: false },
  { id: 28, guest: "Kenji Watanabe", source: "Travelport", rate: "Non-refundable", checkIn: "Mar 26", checkOut: "Mar 29", status: "Cancelled", roomNo: "#928", commission: "$0.00", total: "$870.00", commissionable: false },
  { id: 29, guest: "Elise Beaumont", source: "Expedia", rate: "Expedia", checkIn: "Mar 27", checkOut: "Apr 1", status: "Confirmed", roomNo: "#1029", commission: "$215.00", total: "$1,450.00", commissionable: true, vip: true },
  { id: 30, guest: "Santiago Reyes", source: "Direct", rate: "Direct", checkIn: "Mar 27", checkOut: "Mar 31", status: "Pending", roomNo: "#1030", commission: "$155.00", total: "$1,040.00", commissionable: true },
  { id: 31, guest: "Fatou Sow", source: "Amadeus", rate: "Virtuoso", checkIn: "Mar 27", checkOut: "Apr 2", status: "Checked in", roomNo: "#1031", commission: "$195.00", total: "$1,320.00", commissionable: true, credit: { amount: 100, applied: true } },
  { id: 32, guest: "Viktor Petrov", source: "Sabre", rate: "Bilt", checkIn: "Mar 28", checkOut: "Apr 1", status: "Confirmed", roomNo: "#102", commission: "$170.00", total: "$1,150.00", commissionable: true, credit: { amount: 100, applied: false } },
  { id: 33, guest: "Maren Hauge", source: "Direct", rate: "Flexible", checkIn: "Mar 28", checkOut: "Apr 3", status: "Pending", roomNo: "#203", commission: "$0.00", total: "$1,560.00", commissionable: false },
  { id: 34, guest: "Kwame Adjei", source: "Travelport", rate: "Non-refundable", checkIn: "Mar 28", checkOut: "Mar 31", status: "Cancelled", roomNo: "#304", commission: "$0.00", total: "$945.00", commissionable: false },
  { id: 35, guest: "Clara Engström", source: "Expedia", rate: "Expedia", checkIn: "Mar 29", checkOut: "Apr 2", status: "Confirmed", roomNo: "#405", commission: "$185.00", total: "$1,250.00", commissionable: true, vip: true },
  { id: 36, guest: "Ravi Subramaniam", source: "Direct", rate: "Direct", checkIn: "Mar 29", checkOut: "Apr 3", status: "Checked in", roomNo: "#506", commission: "$205.00", total: "$1,390.00", commissionable: true },
  { id: 37, guest: "Lina Farouk", source: "Amadeus", rate: "Virtuoso", checkIn: "Mar 29", checkOut: "Apr 1", status: "Pending", roomNo: "#607", commission: "$145.00", total: "$980.00", commissionable: true, credit: { amount: 50, applied: false } },
  { id: 38, guest: "Matteo Conti", source: "Sabre", rate: "Bilt", checkIn: "Mar 30", checkOut: "Apr 3", status: "Confirmed", roomNo: "#708", commission: "$175.00", total: "$1,185.00", commissionable: true, credit: { amount: 100, applied: false } },
  { id: 39, guest: "Aya Nakamura", source: "Direct", rate: "Flexible", checkIn: "Mar 30", checkOut: "Apr 5", status: "Checked in", roomNo: "#809", commission: "$0.00", total: "$1,620.00", commissionable: false, vip: true },
  { id: 40, guest: "Thierry Bouchard", source: "Travelport", rate: "Non-refundable", checkIn: "Mar 30", checkOut: "Apr 2", status: "Cancelled", roomNo: "#910", commission: "$0.00", total: "$910.00", commissionable: false },
  { id: 41, guest: "Olumide Adeyemi", source: "Expedia", rate: "Expedia", checkIn: "Mar 31", checkOut: "Apr 4", status: "Confirmed", roomNo: "#1011", commission: "$190.00", total: "$1,280.00", commissionable: true },
  { id: 42, guest: "Bianca Moretti", source: "Direct", rate: "Direct", checkIn: "Mar 31", checkOut: "Apr 5", status: "Pending", roomNo: "#113", commission: "$165.00", total: "$1,115.00", commissionable: true },
  { id: 43, guest: "Hassan Sharif", source: "Amadeus", rate: "HAFH", checkIn: "Mar 31", checkOut: "Apr 3", status: "Checked in", roomNo: "#214", commission: "$150.00", total: "$1,020.00", commissionable: true, credit: { amount: 50, applied: true } },
  { id: 44, guest: "Sienna Walsh", source: "Sabre", rate: "Virtuoso", checkIn: "Apr 1", checkOut: "Apr 5", status: "Confirmed", roomNo: "#315", commission: "$180.00", total: "$1,210.00", commissionable: true, vip: true, credit: { amount: 100, applied: false } },
  { id: 45, guest: "Dmitri Volkov", source: "Direct", rate: "Flexible", checkIn: "Apr 1", checkOut: "Apr 6", status: "Pending", roomNo: "#416", commission: "$0.00", total: "$1,380.00", commissionable: false },
  { id: 46, guest: "Zara Okonkwo", source: "Travelport", rate: "Non-refundable", checkIn: "Apr 1", checkOut: "Apr 4", status: "Cancelled", roomNo: "#517", commission: "$0.00", total: "$935.00", commissionable: false },
  { id: 47, guest: "Erik Johansson", source: "Expedia", rate: "Expedia", checkIn: "Apr 2", checkOut: "Apr 6", status: "Confirmed", roomNo: "#618", commission: "$195.00", total: "$1,315.00", commissionable: true },
  { id: 48, guest: "Paloma Vega", source: "Direct", rate: "Direct", checkIn: "Apr 2", checkOut: "Apr 7", status: "Checked in", roomNo: "#719", commission: "$210.00", total: "$1,430.00", commissionable: true },
  { id: 49, guest: "Adama Traoré", source: "Amadeus", rate: "HAFH", checkIn: "Apr 2", checkOut: "Apr 5", status: "Pending", roomNo: "#820", commission: "$140.00", total: "$950.00", commissionable: true, credit: { amount: 50, applied: false } },
  { id: 50, guest: "Isla McGregor", source: "Sabre", rate: "Bilt", checkIn: "Apr 3", checkOut: "Apr 7", status: "Confirmed", roomNo: "#921", commission: "$185.00", total: "$1,255.00", commissionable: true, vip: true, credit: { amount: 100, applied: false } },
  { id: 51, guest: "Nikolai Sorokin", source: "Direct", rate: "Flexible", checkIn: "Apr 3", checkOut: "Apr 8", status: "Checked in", roomNo: "#1022", commission: "$0.00", total: "$1,510.00", commissionable: false },
  { id: 52, guest: "Celine Dubois", source: "Travelport", rate: "Non-refundable", checkIn: "Apr 3", checkOut: "Apr 6", status: "Cancelled", roomNo: "#123", commission: "$0.00", total: "$895.00", commissionable: false },
  { id: 53, guest: "Tariq Al-Farsi", source: "Expedia", rate: "Expedia", checkIn: "Apr 4", checkOut: "Apr 8", status: "Confirmed", roomNo: "#224", commission: "$175.00", total: "$1,175.00", commissionable: true },
  { id: 54, guest: "Valentina Rossi", source: "Direct", rate: "Direct", checkIn: "Apr 4", checkOut: "Apr 9", status: "Pending", roomNo: "#325", commission: "$200.00", total: "$1,360.00", commissionable: true, vip: true },
  { id: 55, guest: "Ousmane Diop", source: "Amadeus", rate: "HAFH", checkIn: "Apr 4", checkOut: "Apr 7", status: "Checked in", roomNo: "#426", commission: "$145.00", total: "$985.00", commissionable: true, credit: { amount: 50, applied: false } },
  { id: 56, guest: "Astrid Bergman", source: "Sabre", rate: "Bilt", checkIn: "Apr 5", checkOut: "Apr 9", status: "Confirmed", roomNo: "#527", commission: "$190.00", total: "$1,290.00", commissionable: true, credit: { amount: 100, applied: false } },
  { id: 57, guest: "Marco Lombardi", source: "Direct", rate: "Flexible", checkIn: "Apr 5", checkOut: "Apr 10", status: "Pending", roomNo: "#628", commission: "$0.00", total: "$1,440.00", commissionable: false },
  { id: 58, guest: "Priya Kapoor", source: "Travelport", rate: "Non-refundable", checkIn: "Apr 5", checkOut: "Apr 8", status: "Cancelled", roomNo: "#729", commission: "$0.00", total: "$920.00", commissionable: false },
  { id: 59, guest: "Hugo Lefebvre", source: "Expedia", rate: "Expedia", checkIn: "Apr 6", checkOut: "Apr 10", status: "Confirmed", roomNo: "#830", commission: "$180.00", total: "$1,220.00", commissionable: true },
  { id: 60, guest: "Anika Patel", source: "Direct", rate: "Direct", checkIn: "Apr 6", checkOut: "Apr 11", status: "Checked in", roomNo: "#931", commission: "$215.00", total: "$1,460.00", commissionable: true, vip: true },
];

// Guests checking in today
export const checkingInToday: Reservation[] = [
  { id: 11, guest: "Priya Sharma", source: "Direct", rate: "Direct", checkIn: "Mar 26", checkOut: "Mar 30", status: "Confirmed", roomNo: "#108", commission: "$170.00", total: "$1,150.00", commissionable: true, vip: true },
  { id: 12, guest: "Carlos Rivera", source: "Expedia", rate: "Expedia", checkIn: "Mar 26", checkOut: "Mar 29", status: "Confirmed", roomNo: "#215", commission: "$140.00", total: "$980.00", commissionable: true },
  { id: 13, guest: "Fatima Al-Rashid", source: "Amadeus", rate: "HAFH", checkIn: "Mar 26", checkOut: "Apr 1", status: "Confirmed", roomNo: "#310", commission: "$190.00", total: "$1,320.00", commissionable: false, credit: { amount: 100, applied: false } },
  { id: 14, guest: "James O'Brien", source: "Sabre", rate: "Bilt", checkIn: "Mar 26", checkOut: "Mar 28", status: "Confirmed", roomNo: "#422", commission: "$120.00", total: "$850.00", commissionable: true, vip: true, credit: { amount: 50, applied: false } },
  { id: 15, guest: "Yuki Tanaka", source: "Direct", rate: "Flexible", checkIn: "Mar 26", checkOut: "Mar 31", status: "Confirmed", roomNo: "#503", commission: "$0.00", total: "$1,090.00", commissionable: false },
];

// Guests checking out today
export const checkingOutToday: Reservation[] = [
  { id: 16, guest: "Elena Petrov", source: "Direct", rate: "Direct", checkIn: "Mar 22", checkOut: "Mar 26", status: "Checked in", roomNo: "#112", commission: "$160.00", total: "$1,080.00", commissionable: true, vip: true },
  { id: 17, guest: "Samuel Mensah", source: "Expedia", rate: "Expedia", checkIn: "Mar 23", checkOut: "Mar 26", status: "Checked in", roomNo: "#218", commission: "$130.00", total: "$920.00", commissionable: true },
  { id: 18, guest: "Lena Johansson", source: "Travelport", rate: "Non-refundable", checkIn: "Mar 24", checkOut: "Mar 26", status: "Checked in", roomNo: "#305", commission: "$0.00", total: "$780.00", commissionable: false },
];

// Past reservations (completed stays)
export const pastReservations: Reservation[] = [
  { id: 101, guest: "Hannah Mitchell", source: "Direct", rate: "Direct", checkIn: "Feb 10", checkOut: "Feb 14", status: "Completed", roomNo: "#101", commission: "$175.00", total: "$1,180.00", commissionable: true, vip: true },
  { id: 102, guest: "Ravi Patel", source: "Expedia", rate: "Expedia", checkIn: "Feb 12", checkOut: "Feb 16", status: "Completed", roomNo: "#204", commission: "$160.00", total: "$1,045.00", commissionable: true },
  { id: 103, guest: "Sofia Andersson", source: "Amadeus", rate: "HAFH", checkIn: "Feb 15", checkOut: "Feb 20", status: "Completed", roomNo: "#307", commission: "$200.00", total: "$1,350.00", commissionable: true },
  { id: 104, guest: "Omar Hassan", source: "Sabre", rate: "Bilt", checkIn: "Feb 18", checkOut: "Feb 22", status: "Completed", roomNo: "#410", commission: "$0.00", total: "$990.00", commissionable: false },
  { id: 105, guest: "Mei Chen", source: "Direct", rate: "Flexible", checkIn: "Feb 20", checkOut: "Feb 25", status: "Completed", roomNo: "#512", commission: "$185.00", total: "$1,250.00", commissionable: true, vip: true },
  { id: 106, guest: "Thomas Weber", source: "Travelport", rate: "Non-refundable", checkIn: "Feb 22", checkOut: "Feb 26", status: "Completed", roomNo: "#605", commission: "$0.00", total: "$1,020.00", commissionable: false },
  { id: 107, guest: "Amara Osei", source: "Direct", rate: "Direct", checkIn: "Feb 25", checkOut: "Mar 1", status: "Completed", roomNo: "#708", commission: "$170.00", total: "$1,140.00", commissionable: true },
  { id: 108, guest: "Lucas Martin", source: "Expedia", rate: "Expedia", checkIn: "Mar 1", checkOut: "Mar 5", status: "Completed", roomNo: "#201", commission: "$150.00", total: "$1,010.00", commissionable: true },
  { id: 109, guest: "Aiko Yamamoto", source: "Amadeus", rate: "HAFH", checkIn: "Mar 3", checkOut: "Mar 8", status: "Completed", roomNo: "#314", commission: "$195.00", total: "$1,300.00", commissionable: true, vip: true },
  { id: 110, guest: "David Kowalski", source: "Direct", rate: "Flexible", checkIn: "Mar 5", checkOut: "Mar 10", status: "Completed", roomNo: "#415", commission: "$0.00", total: "$1,210.00", commissionable: false },
  { id: 111, guest: "Nina Ivanova", source: "Sabre", rate: "Bilt", checkIn: "Mar 8", checkOut: "Mar 12", status: "Cancelled", roomNo: "#509", commission: "$140.00", total: "$960.00", commissionable: true },
  { id: 112, guest: "Kwame Asante", source: "Travelport", rate: "Non-refundable", checkIn: "Mar 10", checkOut: "Mar 14", status: "Completed", roomNo: "#611", commission: "$0.00", total: "$1,100.00", commissionable: false },
  { id: 113, guest: "Clara Rodriguez", source: "Direct", rate: "Direct", checkIn: "Mar 12", checkOut: "Mar 16", status: "Completed", roomNo: "#102", commission: "$175.00", total: "$1,175.00", commissionable: true },
  { id: 114, guest: "Ahmed Khalil", source: "Expedia", rate: "Expedia", checkIn: "Mar 14", checkOut: "Mar 18", status: "Completed", roomNo: "#220", commission: "$155.00", total: "$1,040.00", commissionable: true },
  { id: 115, guest: "Eva Lindqvist", source: "Direct", rate: "Flexible", checkIn: "Mar 15", checkOut: "Mar 19", status: "Completed", roomNo: "#318", commission: "$0.00", total: "$1,070.00", commissionable: false },
  { id: 116, guest: "Joaquin Navarro", source: "Amadeus", rate: "Bilt", checkIn: "Jan 5", checkOut: "Jan 9", status: "Completed", roomNo: "#103", commission: "$165.00", total: "$1,110.00", commissionable: true },
  { id: 117, guest: "Fatima Benali", source: "Sabre", rate: "Non-refundable", checkIn: "Jan 7", checkOut: "Jan 12", status: "Completed", roomNo: "#205", commission: "$0.00", total: "$1,320.00", commissionable: false, vip: true },
  { id: 118, guest: "Sebastian Krug", source: "Direct", rate: "Direct", checkIn: "Jan 10", checkOut: "Jan 14", status: "Completed", roomNo: "#306", commission: "$180.00", total: "$1,215.00", commissionable: true },
  { id: 119, guest: "Leila Ahmadi", source: "Expedia", rate: "Expedia", checkIn: "Jan 12", checkOut: "Jan 17", status: "Completed", roomNo: "#408", commission: "$195.00", total: "$1,320.00", commissionable: true },
  { id: 120, guest: "Patrick O'Connell", source: "Travelport", rate: "HAFH", checkIn: "Jan 15", checkOut: "Jan 19", status: "Cancelled", roomNo: "#510", commission: "$0.00", total: "$1,060.00", commissionable: false },
  { id: 121, guest: "Chiara Bianchi", source: "Direct", rate: "Flexible", checkIn: "Jan 18", checkOut: "Jan 23", status: "Completed", roomNo: "#612", commission: "$0.00", total: "$1,440.00", commissionable: false },
  { id: 122, guest: "Youssef El-Amin", source: "Amadeus", rate: "Bilt", checkIn: "Jan 20", checkOut: "Jan 24", status: "Completed", roomNo: "#713", commission: "$155.00", total: "$1,050.00", commissionable: true, vip: true },
  { id: 123, guest: "Monika Szabo", source: "Sabre", rate: "Non-refundable", checkIn: "Jan 22", checkOut: "Jan 26", status: "Completed", roomNo: "#814", commission: "$0.00", total: "$980.00", commissionable: false },
  { id: 124, guest: "Daisuke Tanaka", source: "Direct", rate: "Direct", checkIn: "Jan 25", checkOut: "Jan 30", status: "Completed", roomNo: "#915", commission: "$210.00", total: "$1,420.00", commissionable: true },
  { id: 125, guest: "Grace Okafor", source: "Expedia", rate: "Expedia", checkIn: "Jan 28", checkOut: "Feb 1", status: "Completed", roomNo: "#1016", commission: "$170.00", total: "$1,150.00", commissionable: true },
  { id: 126, guest: "Anders Holm", source: "Travelport", rate: "HAFH", checkIn: "Feb 1", checkOut: "Feb 5", status: "Completed", roomNo: "#117", commission: "$160.00", total: "$1,085.00", commissionable: true },
  { id: 127, guest: "Isabelle Marchand", source: "Direct", rate: "Flexible", checkIn: "Feb 3", checkOut: "Feb 8", status: "Cancelled", roomNo: "#218", commission: "$0.00", total: "$1,270.00", commissionable: false },
  { id: 128, guest: "Emeka Nwosu", source: "Amadeus", rate: "Bilt", checkIn: "Feb 5", checkOut: "Feb 9", status: "Completed", roomNo: "#319", commission: "$145.00", total: "$985.00", commissionable: true },
  { id: 129, guest: "Katarina Novak", source: "Sabre", rate: "Non-refundable", checkIn: "Feb 7", checkOut: "Feb 12", status: "Completed", roomNo: "#420", commission: "$0.00", total: "$1,310.00", commissionable: false, vip: true },
  { id: 130, guest: "Rafael Soto", source: "Direct", rate: "Direct", checkIn: "Feb 9", checkOut: "Feb 13", status: "Completed", roomNo: "#521", commission: "$175.00", total: "$1,185.00", commissionable: true },
  { id: 131, guest: "Nkechi Eze", source: "Expedia", rate: "Expedia", checkIn: "Jan 3", checkOut: "Jan 7", status: "Completed", roomNo: "#622", commission: "$150.00", total: "$1,015.00", commissionable: true },
  { id: 132, guest: "Henrik Larsen", source: "Travelport", rate: "HAFH", checkIn: "Jan 6", checkOut: "Jan 11", status: "Completed", roomNo: "#723", commission: "$190.00", total: "$1,290.00", commissionable: true },
  { id: 133, guest: "Samira Hussain", source: "Direct", rate: "Flexible", checkIn: "Jan 9", checkOut: "Jan 13", status: "Completed", roomNo: "#824", commission: "$0.00", total: "$1,080.00", commissionable: false },
  { id: 134, guest: "Luca Fontana", source: "Amadeus", rate: "Bilt", checkIn: "Jan 11", checkOut: "Jan 16", status: "Cancelled", roomNo: "#925", commission: "$0.00", total: "$1,350.00", commissionable: false },
  { id: 135, guest: "Adeline Fournier", source: "Sabre", rate: "Non-refundable", checkIn: "Jan 14", checkOut: "Jan 18", status: "Completed", roomNo: "#1026", commission: "$0.00", total: "$960.00", commissionable: false, vip: true },
];

// Transfer types and data
export interface Transfer {
  id: string;
  property: string;
  statement: string;
  beneficiary: string;
  country: string;
  status: "Ready to pay" | "Received" | "Sent" | "Cancelled";
  sent: string;
  received: string;
}

export interface TransferDetail {
  id: string;
  status: "Ready to pay" | "Received" | "Sent" | "Cancelled";
  payableTo: string;
  fromStatement: string;
  totalSent: string;
  totalSentDate: string;
  totalReceived: string;
  totalReceivedDate: string;
  exchangeRate: string;
  commissionableFare: string;
  referenceId: string;
  airwallexId: string;
  beneficiary: string;
  agency: string;
  email: string;
  recipientCountry: string;
  currency: string;
  reservations: TransferReservation[];
}

export interface TransferReservation {
  id: number;
  traveler: string;
  travelerCode: string;
  identifierType: string;
  identifierValue: string;
  dateStart: string;
  dateEnd: string;
  commFare: string;
  due: string;
}

export const transfers: Transfer[] = [
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Ready to pay", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Received", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Sent", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Cancelled", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Ready to pay", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Ready to pay", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Sent", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Received", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Sent", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Received", sent: "$0.00", received: "$0.00" },
  { id: "09KUKR8S", property: "King, Wolff and...", statement: "6KDFB31D", beneficiary: "High Sky Travel", country: "US", status: "Received", sent: "$0.00", received: "$0.00" },
];

export const transferDetail: TransferDetail = {
  id: "09KUKR8S",
  status: "Received",
  payableTo: "High Sky Travel",
  fromStatement: "6VDFBMA",
  totalSent: "€480.00",
  totalSentDate: "5/15/2026",
  totalReceived: "$525.00",
  totalReceivedDate: "5/15/2026",
  exchangeRate: "@1.104607 EUR/USD",
  commissionableFare: "€5,180.00",
  referenceId: "8137cff3-bc48-4a61-a160-7d4f57343344",
  airwallexId: "a5ed2bfe-85a0-467c-8cf3-7d73282f1e28",
  beneficiary: "High Sky Travel",
  agency: "High Sky Travel",
  email: "admin@hst.com",
  recipientCountry: "United States (US)",
  currency: "USD ($) - United States Dollar",
  reservations: [
    { id: 1, traveler: "L. Henderson", travelerCode: "LB4RTL", identifierType: "Other", identifierValue: "e3d0245c-9667-...", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 2, traveler: "O. Bennet", travelerCode: "", identifierType: "IATA", identifierValue: "74562898", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 3, traveler: "P. Freshman", travelerCode: "LB4RTL", identifierType: "IATA", identifierValue: "41239864", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 4, traveler: "X. Wu", travelerCode: "LB4RTL", identifierType: "IATA", identifierValue: "41239864", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 5, traveler: "G. Wells", travelerCode: "LB4RTL", identifierType: "CLIA", identifierValue: "53648573", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 6, traveler: "M. Nauroth", travelerCode: "LB4RTL", identifierType: "Other", identifierValue: "e3d0245c-9667-...", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 7, traveler: "R. Hernandez", travelerCode: "", identifierType: "Other", identifierValue: "e3d0245c-9667-...", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 8, traveler: "J. Salazar", travelerCode: "", identifierType: "IATA", identifierValue: "41239864", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 9, traveler: "A. Salazar", travelerCode: "", identifierType: "IATA", identifierValue: "41239864", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 10, traveler: "S. Goodman", travelerCode: "", identifierType: "IATA", identifierValue: "41239864", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
    { id: 11, traveler: "T. Taylor", travelerCode: "", identifierType: "IATA", identifierValue: "41239864", dateStart: "9/30/2026", dateEnd: "9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  ],
};

// Statements
export interface Statement {
  id: string;
  property: string;
  dateRange: string;
  status: "Opened" | "Reviewed" | "Approved" | "Payment in progress" | "Processed" | "Cancelled";
  reservations: number;
  commissionDue: string;
  totalDue: string;
}

export const statements: Statement[] = [
  { id: "R1FLWQ2U", property: "King, Wolff and Gibson Group", dateRange: "May 1, 2026 - May 28, 2026", status: "Opened", reservations: 11, commissionDue: "$4,000.00", totalDue: "$37,912.00" },
  { id: "M7DU9EDU", property: "King, Wolff and Gibson Group", dateRange: "Apr 15, 2026 - May 15, 2026", status: "Reviewed", reservations: 34, commissionDue: "$24,346.00", totalDue: "$124,500.00" },
  { id: "UOTBZ73O", property: "West Group and Sons", dateRange: "Sep 15, 2026 - Sep 30, 2026", status: "Approved", reservations: 23, commissionDue: "$4,003.00", totalDue: "$28,400.00" },
  { id: "ODI7FCFY", property: "West Group and Sons", dateRange: "Jun 10, 2026 - Jul 10, 2026", status: "Payment in progress", reservations: 2, commissionDue: "$340.00", totalDue: "$2,800.00" },
  { id: "UGO8BUNF", property: "King, Wolff and Gibson Group", dateRange: "Jan 5, 2026 - Feb 5, 2026", status: "Processed", reservations: 8, commissionDue: "$567.00", totalDue: "$4,200.00" },
  { id: "UOTBZ73O", property: "King, Wolff and Gibson Group", dateRange: "Sep 30, 2026 - Sep 15, 2026", status: "Cancelled", reservations: 10, commissionDue: "$9,871.00", totalDue: "$68,000.00" },
  { id: "M7DU9EDU", property: "West Group and Sons", dateRange: "Nov 30, 2025 - Dec 30, 2025", status: "Approved", reservations: 4, commissionDue: "$400.00", totalDue: "$3,100.00" },
  { id: "PDGZXWOF", property: "King, Wolff and Gibson Group", dateRange: "Feb 2, 2026 - Feb 15, 2026", status: "Opened", reservations: 57, commissionDue: "$37,512.00", totalDue: "$245,000.00" },
  { id: "R1FLWQ2U", property: "King, Wolff and Gibson Group", dateRange: "Sep 30, 2026 - Sep 15, 2026", status: "Opened", reservations: 1, commissionDue: "$0.00", totalDue: "$800.00" },
  { id: "ODI7FCFY", property: "King, Wolff and Gibson Group", dateRange: "Jun 10, 2026 - Jul 10, 2026", status: "Payment in progress", reservations: 8, commissionDue: "$6,278.00", totalDue: "$42,000.00" },
  { id: "RVAMRPD9", property: "King, Wolff and Gibson Group", dateRange: "Sep 30, 2026 - Sep 15, 2026", status: "Payment in progress", reservations: 7, commissionDue: "$679.00", totalDue: "$5,100.00" },
  { id: "UGO8BUNF", property: "West Group and Sons", dateRange: "May 1, 2026 - May 28, 2026", status: "Approved", reservations: 2, commissionDue: "$400.00", totalDue: "$3,200.00" },
  { id: "UOTBZ73O", property: "King, Wolff and Gibson Group", dateRange: "Jan 5, 2026 - Feb 5, 2026", status: "Cancelled", reservations: 1, commissionDue: "$321.00", totalDue: "$2,400.00" },
  { id: "M7DU9EDU", property: "West Group and Sons", dateRange: "Feb 2, 2026 - Feb 15, 2026", status: "Payment in progress", reservations: 14, commissionDue: "$4,003.00", totalDue: "$28,000.00" },
  { id: "PDGZXWOF", property: "King, Wolff and Gibson Group", dateRange: "Apr 15, 2026 - May 15, 2026", status: "Opened", reservations: 67, commissionDue: "$24,346.00", totalDue: "$156,000.00" },
  { id: "ODI7FCFY", property: "West Group and Sons", dateRange: "May 1, 2026 - May 28, 2026", status: "Reviewed", reservations: 5, commissionDue: "$400.00", totalDue: "$3,600.00" },
];

// Statement detail reservation rows
export interface StatementReservation {
  traveler: string;
  statementId: string;
  agency: string;
  agencyId: string;
  dates: string;
  commFare: string;
  due: string;
}

export const statementReservations: StatementReservation[] = [
  { traveler: "L. Henderson", statementId: "L84RTL", agency: "GOAT Travel Corp", agencyId: "Other: e3d0245c-9667-...", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "O. Bennet", statementId: "L84RTL", agency: "Flower Forest Retreats", agencyId: "IATA: 74562898", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "P. Freshman", statementId: "L84RTL", agency: "Flying Squirrels Experien...", agencyId: "IATA: 41239864", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "X. Wu", statementId: "L84RTL", agency: "Flying Squirrels Experien...", agencyId: "IATA: 41239864", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "G. Wells", statementId: "L84RTL", agency: "Lord of the Travels", agencyId: "CLIA: 53648573", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "M. Nauroth", statementId: "L84RTL", agency: "Flower Forest Retreats", agencyId: "Other: e3d0245c-9667-...", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "R. Hernandez", statementId: "L84RTL", agency: "Flower Forest Retreats", agencyId: "Other: e3d0245c-9667-...", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "J. Salazar", statementId: "L84RTL", agency: "Flying Squirrels Experien...", agencyId: "IATA: 41239864", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "A. Salazar", statementId: "L84RTL", agency: "Flying Squirrels Experien...", agencyId: "IATA: 41239864", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "S. Goodman", statementId: "L84RTL", agency: "Flying Squirrels Experien...", agencyId: "IATA: 41239864", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
  { traveler: "T. Taylor", statementId: "L84RTL", agency: "Flying Squirrels Experien...", agencyId: "IATA: 41239864", dates: "9/30/2026 - 9/15/2026", commFare: "$3,000.00", due: "$360.00" },
];

// Statement detail transfer rows
export interface StatementTransfer {
  id: string;
  beneficiary: string;
  status: "Sent" | "Received" | "Cancelled";
  sent: string;
  sentDate: string;
  received: string;
  receivedDate?: string;
}

export const statementTransfers: StatementTransfer[] = [
  { id: "LSDKHSGD", beneficiary: "High Sky Travel", status: "Sent", sent: "€540.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "09KUKR8S", beneficiary: "High Sky Travel", status: "Received", sent: "€1,820.00", sentDate: "5/13/2026", received: "$2,125.00", receivedDate: "5/15/2026" },
  { id: "MMASF12", beneficiary: "No Name Agency", status: "Cancelled", sent: "€3,465.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "POO234FC", beneficiary: "High Sky Travel", status: "Sent", sent: "€124.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "ER234NSD", beneficiary: "High Sky Travel", status: "Sent", sent: "€987.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "AAFJGNDB", beneficiary: "High Sky Travel", status: "Sent", sent: "€222.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "DGSJ2346", beneficiary: "No Name Agency", status: "Sent", sent: "€10,040.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "POO234FC", beneficiary: "In The Bilt Adventures", status: "Sent", sent: "€3,640.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "ER234NSD", beneficiary: "In The Bilt Adventures", status: "Sent", sent: "€2,454.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "AAFJGNDB", beneficiary: "In The Bilt Adventures", status: "Sent", sent: "€480.00", sentDate: "5/13/2026", received: "$0.00" },
  { id: "DGSJ2346", beneficiary: "In The Bilt Adventures", status: "Sent", sent: "€540.00", sentDate: "5/13/2026", received: "$0.00" },
];

// Agencies
export interface Agency {
  id: number;
  name: string;
  status: "Active" | "Pending";
  identifiers: string[];
  regions: string[];
}

export const agencies: Agency[] = [
  { id: 1, name: "1000 Mile Travel Group", status: "Pending", identifiers: ["CLIA 3356790", "Other GR6574893", "Other 55335577", "IATA 06694314"], regions: ["DE", "FR", "IE", "US"] },
  { id: 2, name: "123", status: "Pending", identifiers: ["CLIA 909089765", "IATA 45542195", "CLIA 1234567890", "Other 1231231234314", "CLIA 12312322", "Other 4456789012", "IATA 55678901", "Other 6678901234", "CLIA 7789012345", "Other 8890123456", "IATA 9901234567"], regions: ["DE", "IE", "QA", "US"] },
  { id: 3, name: "360 Private Travel Limited", status: "Active", identifiers: ["Other 234567890", "Other test", "IATA 45769253", "IATA 33594492", "IATA 1111111", "CLIA 8876543", "Other 7765432"], regions: ["CA", "QA", "US"] },
  { id: 4, name: "Airborne Travels", status: "Active", identifiers: ["Other 2222222", "Other 111111112", "Other 333333", "Other 01994dfb-6173-7f4b-ae3d-67f388fa5698"], regions: ["CA", "US"] },
  { id: 5, name: "Airborne Travels", status: "Active", identifiers: ["CLIA 9784652", "CLIA 1234567", "Other 019953b7-f5cb-7b82-b279-84d8184aa9dc"], regions: ["GB", "US"] },
  { id: 6, name: "Airborne Travels", status: "Active", identifiers: ["CLIA 234567890-098765432", "Other ABC-123456", "Other 123321ACB", "Other 1233214ABS", "Other 1233214AVS", "IATA 99887766", "Other 5544332211", "CLIA 1122334455"], regions: ["GB", "US"] },
  { id: 7, name: "Airborne Travels", status: "Active", identifiers: ["CLIA 45678925", "CLIA 12345678", "Other 019953a7-3587-7301-af05-926a909f6a7e"], regions: ["GB", "US"] },
  { id: 8, name: "Airborne Travels", status: "Active", identifiers: ["Other ABC123456", "CLIA 1231232", "CLIA 1312312", "Other 019953cb-b528-76a7-bc2b-dcf70afdbb70"], regions: ["GB", "US"] },
  { id: 9, name: "American Express Europe", status: "Active", identifiers: ["Other EXP2019019", "IATA 01923921"], regions: ["DE", "GB", "US"] },
  { id: 10, name: "Beacon Horizon Travel", status: "Active", identifiers: ["IATA 76543210", "CLIA 8765432", "Other BHT-2024-001"], regions: ["AU", "NZ", "US"] },
  { id: 11, name: "Coastal Voyages Inc.", status: "Pending", identifiers: ["CLIA 5432109", "IATA 32109876"], regions: ["US", "MX"] },
  { id: 12, name: "Diamond Journeys", status: "Active", identifiers: ["Other DJ-9988776", "IATA 11223344", "CLIA 5566778899"], regions: ["FR", "IT", "ES"] },
];
