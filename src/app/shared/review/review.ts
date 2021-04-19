import { Timestamp } from "@firebase/firestore-types";

export interface Review {
  bookUsefulness: number,
  classId: string,
  course: string,
  difficulty: number,
  exams: true,
  helpfulNegative?: number,
  helpfulPositive?: number,
  homework: true,
  lastUpdated: Timestamp,
  lectureQuality: number,
  peerReviewed: boolean,
  piazzaCommunity: number,
  professorQuality: number,
  projects: false,
  rating: number,
  review: string,
  semester: string,
  title: string,
  timestamp: Timestamp,
  workload: number,
  year: number,
  userId?: string,
  reviewId?: string,
  wilsonScore?: number,
}

export enum reviewFeedbackType {
  positive = "yes",
  negative = "no",
  undoFeedback = "",
}