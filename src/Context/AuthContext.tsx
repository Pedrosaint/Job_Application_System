/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// import React, {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   ReactNode,
// } from "react";
// // import { auth, db } from "../Firebase/Firebase";
// import {
//   User,
//   onAuthStateChanged,
//   signOut,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   updateProfile,
// } from "firebase/auth";
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   onSnapshot,
//   updateDoc,
//   Timestamp,
// } from "firebase/firestore";


// // Define User Type
// interface AuthUser extends User {
//   fullName?: string;
//   role?: string;
// }

// // Define Context Type
// interface AuthContextType {
//   currentUser: AuthUser | null;
//   activeUserCount: number;
//   login: (email: string, password: string) => Promise<void>;
//   register: (
//     email: string,
//     password: string,
//     fname: string,
//     lname: string
//   ) => Promise<void>;
//   logout: () => Promise<void>;
//   googleLogin: () => Promise<void>;
// }

// // Create Context with default value as null
// const AuthContext = createContext<AuthContextType | null>(null);

// // Auth Provider Props
// interface AuthProviderProps {
//   children: ReactNode;
// }

// // Auth Provider Component
// const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeUserCount, setActiveUserCount] = useState<number>(0);

//   // Listen for auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         try {
//           const userDocRef = doc(db, "Users", user.uid);
//           const userDoc = await getDoc(userDocRef);

//           if (userDoc.exists()) {
//             setCurrentUser({ ...user, ...userDoc.data() } as AuthUser);
//             await updateDoc(userDocRef, { isActive: true });
//           } else {
//             setCurrentUser(user as AuthUser);
//           }
//         } catch (error) {
//           console.error("Error fetching or updating user data:", error);
//         }
//       } else {
//         setCurrentUser(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   // Track active users
//   useEffect(() => {
//     const unsubscribe = onSnapshot(
//       collection(db, "Users"),
//       (snapshot) => {
//         let activeUsers = 0;
//         snapshot.forEach((doc) => {
//           const user = doc.data();
//           if (user.isActive) {
//             activeUsers += 1;
//           }
//         });

//         setActiveUserCount(activeUsers);
//       },
//       (error) => {
//         console.error("Error fetching active users:", error);
//       }
//     );

//     return () => unsubscribe();
//   }, []);

//   // Helper function to safely update Firestore documents
//   const safeUpdateDoc = async (docRef: any, data: any) => {
//     try {
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         await updateDoc(docRef, data);
//       } else {
//         console.warn("Document does not exist, skipping update:", docRef.id);
//       }
//     } catch (error) {
//       console.error("Error updating document:", error);
//     }
//   };

//   // Email & Password Registration
//   const register = async (
//     email: string,
//     password: string,
//     fname: string,
//     lname: string
//   ) => {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const { user } = userCredential;

//     await updateProfile(user, {
//       displayName: `${fname} ${lname}`,
//     });

//     await setDoc(
//       doc(db, "Users", user.uid),
//       {
//         uid: user.uid,
//         email: user.email,
//         fullName: `${fname} ${lname}`,
//         createdAt: Timestamp.now(),
//         role: "Employer",
//         isActive: true,
//       },
//       { merge: true }
//     );

//     setCurrentUser({
//       ...user,
//       fullName: `${fname} ${lname}`,
//       role: "Employer",
//     } as AuthUser);
//   };

//   // Email & Password Login
//   const login = async (email: string, password: string) => {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const { user } = userCredential;

//     const userDocRef = doc(db, "Users", user.uid);
//     const userDoc = await getDoc(userDocRef);

//     if (userDoc.exists()) {
//       const userData = userDoc.data();
//       await safeUpdateDoc(userDocRef, { isActive: true });

//       setCurrentUser({
//         ...user,
//         fullName: userData.fullName || user.displayName || "No Name",
//         role: userData.role || "Employer",
//       } as AuthUser);
//     } else {
//       setCurrentUser({
//         ...user,
//         fullName: user.displayName || "No Name",
//         role: "Employer",
//       } as AuthUser);
//     }
//   };

//   // Logout
//   const logout = async () => {
//     try {
//       if (currentUser) {
//         const userDocRef = doc(db, "Users", currentUser.uid);
//         await safeUpdateDoc(userDocRef, { isActive: false });
//       }
//       await signOut(auth);
//       setCurrentUser(null);
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   // Google Login
//   const googleLogin = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       // Initiate Google sign-in
//       const result = await signInWithPopup(auth, provider);
//       const { user } = result;

//       // Define user document reference
//       const userDocRef = doc(db, "Users", user.uid);

//       // Check if the user document exists
//       const userDoc = await getDoc(userDocRef);
//       const defaultUserData = {
//         uid: user.uid,
//         email: user.email,
//         fullName: user.displayName || "No Name",
//         createdAt: Timestamp.now(),
//         role: "Employer",
//         isActive: true,
//       };

//       if (userDoc.exists()) {
//         // Update existing user document
//         const existingData = userDoc.data();
//         await setDoc(
//           userDocRef,
//           {
//             ...defaultUserData,
//             fullName: existingData.fullName || defaultUserData.fullName,
//             createdAt: existingData.createdAt || defaultUserData.createdAt,
//             role: existingData.role || defaultUserData.role,
//           },
//           { merge: true }
//         );
//       } else {
//         // Create new user document
//         await setDoc(userDocRef, defaultUserData, { merge: true });
//       }

//       // Update current user state
//       setCurrentUser({
//         ...user,
//         fullName: user.displayName || "No Name",
//         role: "Employer",
//       } as AuthUser);

//       console.log("Google login successful:", user);
//     } catch (error) {
//       console.error("Google Login Error:", error);

//       // Throw a meaningful error for better debugging in the UI
//       throw error instanceof Error
//         ? error
//         : new Error("Google login failed. Please try again.");
//     }
//   };


//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//         activeUserCount,
//         login,
//         register,
//         logout,
//         googleLogin,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// // Custom Hook for using Auth Context
// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default AuthProvider;




import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

// Define User Type
interface AuthUser {
  uid: string;
  email: string;
  fullName?: string;
  role?: string;
}

// Define Context Type
interface AuthContextType {
  currentUser: AuthUser | null;
  activeUserCount: number;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    fname: string,
    lname: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  googleLogin: () => Promise<void>;
}

// Create Context
const AuthContext = createContext<AuthContextType | null>(null);

// Props
interface AuthProviderProps {
  children: ReactNode;
}

// Dummy in-memory user database
const fakeUsers: Record<string, AuthUser & { password: string }> = {};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeUserCount, setActiveUserCount] = useState<number>(0);

  // Simulate checking localStorage for persisted user
  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setActiveUserCount(1);
    }
    setLoading(false);
  }, []);

  // Save user in localStorage
  const persistUser = (user: AuthUser | null) => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  };

  // Register
  const register = async (
    email: string,
    password: string,
    fname: string,
    lname: string
  ) => {
    if (fakeUsers[email]) {
      throw new Error("User already exists");
    }

    const newUser: AuthUser & { password: string } = {
      uid: Date.now().toString(),
      email,
      fullName: `${fname} ${lname}`,
      role: "Employer",
      password,
    };

    fakeUsers[email] = newUser;

    const { password: _, ...userWithoutPassword } = newUser;
    setCurrentUser(userWithoutPassword);
    persistUser(userWithoutPassword);
    setActiveUserCount(1);
  };

  // Login
  const login = async (email: string, password: string) => {
    const user = fakeUsers[email];
    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    const { password: _, ...userWithoutPassword } = user;
    setCurrentUser(userWithoutPassword);
    persistUser(userWithoutPassword);
    setActiveUserCount(1);
  };

  // Logout
  const logout = async () => {
    setCurrentUser(null);
    persistUser(null);
    setActiveUserCount(0);
  };

  // Fake Google Login
  const googleLogin = async () => {
    const user: AuthUser = {
      uid: Date.now().toString(),
      email: "googleuser@example.com",
      fullName: "Google User",
      role: "Employer",
    };

    setCurrentUser(user);
    persistUser(user);
    setActiveUserCount(1);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        activeUserCount,
        login,
        register,
        logout,
        googleLogin,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
