import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cvData: {
        name: 'Ulvin Omarov',
        role: 'Frontend Developer',
        email: 'ulvin@example.com',
        phone: '+994 50 123 45 67',
        age: '26',
        gender: 'Kişi',
        city: 'Bakı',
        salary: '1500 AZN',
        skills: [
            "Emas portalında işçilərin işə götürülməsi, işdən azad edilməsi",
            "Vergi hesabatlarının vaxtı-vaxtında Vergi orqanına təqdim edilməsi",
            "Statistik hesabatların təqdim edilməsi",
            "İnternet Bank xidmətlərində bütün köçürmələrin yerinə yetirilməsi",
            "Əmək haqqı, məzuniyyət, xəstəlik vərəqəsinin hesablanması",
            "Əmr və məktubların hazırlanması",
            "Müqavilələrin bağlanması"
        ],
        experiences: [
            "5 ildən artıq 2006- ci il sentyabr ayından 2008- ci il oktyabr ayınadək Tovuz rayon Statistika İdarəsində Böyük mütəxəssis vəzifəsində çalışmışam.",
            "2009-cu il iyun ayından 2024-cü il oktyabr ayınadək Azərbaycan Həmkarlar İttifaqlarının Ülfet qəzetində baş mühasib vəzifəsində çalışmışam."
        ],
        education: [],
        additionalInfo: '',
    },
};

const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
        setCVData: (state, action) => {
            state.cvData = action.payload;
        },
        updateCVField: (state, action) => {
            const { field, value } = action.payload;
            state.cvData[field] = value;
        },
        addSkill: (state, action) => {
            state.cvData.skills.push(action.payload);
        },
        removeSkill: (state, action) => {
            state.cvData.skills = state.cvData.skills.filter(skill => skill !== action.payload);
        },
        addExperience: (state, action) => {
            state.cvData.experiences.push(action.payload);
        },
        removeExperience: (state, action) => {
            state.cvData.experiences = state.cvData.experiences.filter((_, i) => i !== action.payload);
        },
        addEducation: (state, action) => {
            state.cvData.education.push(action.payload);
        },
        removeEducation: (state, action) => {
            state.cvData.education = state.cvData.education.filter((_, i) => i !== action.payload);
        },
        resetCV: () => initialState,
    },
});

export const {
    setCVData,
    updateCVField,
    addSkill,
    removeSkill,
    addExperience,
    removeExperience,
    addEducation,
    removeEducation,
    resetCV,
} = cvSlice.actions;

export default cvSlice.reducer;
