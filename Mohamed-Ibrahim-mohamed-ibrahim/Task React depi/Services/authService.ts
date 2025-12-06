import mockData from '../data/mockData.json';

export interface User {
  id: number | string;
  name: string;
  email?: string;
  password?: string;
  role: 'admin' | 'doctor' | 'patient';
  avatar?: string;
  heartRate?: string;
  bloodPressure?: string;
  weight?: string;
  glucose?: string;
  // Doctor specific fields
  specialty?: string;
  experience?: string;
  education?: string;
  bio?: string;
  licenseNumber?: string;
  phone?: string;
  address?: string;
  status?: 'Active' | 'Away' | 'Offline';
  // Verification fields
  verificationStatus?: 'unverified' | 'pending' | 'approved' | 'rejected';
  verificationDocuments?: string[];
  submittedDate?: string;
}

export const authService = {
  login: async (username: string, password: string): Promise<User | null> => {
    // Simulate API delay
    // await new Promise((resolve) => setTimeout(resolve, 500));

    // Check registered users from store first
    if (typeof window !== 'undefined') {
      const storeData = localStorage.getItem('care-connect-storage');
      if (storeData) {
        try {
          const { state } = JSON.parse(storeData);
          const registeredUser = state.registeredUsers?.find(
            (u: User) => u.email === username
          );
          
          if (registeredUser) {
            // For registered users, password is stored in a 'password' field (demo only)
            // In production, this would be hashed and verified on backend
            if ((registeredUser as any).password === password) {
              const { password: _, ...userWithoutPassword } = registeredUser as any;
              return userWithoutPassword;
            }
          }
        } catch (error) {
          console.error('Failed to parse store data', error);
        }
      }
    }

    // Admin Login
    if (username === 'admin' && password === 'admin123') {
      return {
        id: 'admin',
        name: 'Administrator',
        role: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=Admin&background=7c3aed&color=fff'
      };
    }

    // Doctor Login (using email as username for simplicity in this mock)
    const doctor = mockData.doctors.find(
      (d) => d.email === username && password === 'doctor123' // Hardcoded password for demo
    );
    if (doctor) {
      return {
        id: doctor.id,
        name: doctor.name,
        email: doctor.email,
        role: 'doctor',
        avatar: doctor.avatar
      };
    }

    // Patient Login
    const patient = mockData.patients.find(
      (p) => p.email === username && password === 'patient123' // Hardcoded password for demo
    );
    if (patient) {
      return {
        id: patient.id,
        name: patient.name,
        email: patient.email,
        role: 'patient',
        avatar: patient.avatar
      };
    }

    return null;
  }
};