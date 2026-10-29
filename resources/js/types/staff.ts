// Mirrors the array built by App\Actions\Staff\BuildStaffList.
export type StaffRow = {
    id: number;
    name: string;
    email: string;
    createdAt: string | null;
    isYou: boolean;
};
