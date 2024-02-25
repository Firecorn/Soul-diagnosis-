class Health {
  constructor(name, age, weight, height, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
  }

  // Calculate BMI
  bmi() {
    let bmi = this.weight / (this.height ** 2);
    console.log("Your BMI is " + bmi);
    return bmi;
  }

  // Calculate BMR
  bmr() {
    let bmr;
    if (this.gender.toLowerCase() === "male") {
      bmr = 88.362 + (13.397 * this.weight) + (4.799 * this.height) - (5.677 * this.age);
    } else if (this.gender.toLowerCase() === "female") {
      bmr = 447.593 + (9.247 * this.weight) + (3.098 * this.height) - (4.330 * this.age);
    }
    console.log("Your BMR is " + bmr);
    return bmr;
  }

  // Calculate BMI range
  bmiRange() {
    let bmiValue = this.bmi();
    let bmiRange = (bmiValue - 18.5) / (bmiValue - 24.9);
    console.log("Your BMI range is " + bmiRange);
    return bmiRange;
  }

  // Calculate BMR range
  bmrRange() {
    let bmrValue = this.bmr();
    let bmrRange;
    if (bmrValue) {
      bmrRange = (bmrValue - 18.5) / (bmrValue - 24.9);
      console.log("Your BMR range is " + bmrRange);
    } else {
      bmrRange = 0;
    }
    return bmrRange;
  }
}

// Define a JavaScript class for mental health assessment
class MentalHealth extends Health {
  constructor() {
    super();
  }

  // Perform mental health assessment
  assessMentalHealth() {
    const depression = ["sadness", "irritability", "feeling negative", "feeling worthless", "poor academic performance", "avoidance of others", "anger"];
    const eatingDisorders = ["distorted body image", "skipping most meals", "unusual eating habits", "frequent weighing", "extreme weight change", "insomnia", "constipation", "skin rash", "dry skin", "dental cavities", "erosion of tooth enamel", "hyperactivity", "need to exercise"];
    const paranoiaSymptoms = ["Easily offended", "Difficult to trust others", "Unable to deal with types of criticism", "Assign harmful meanings to other people's remarks", "Always on the defensive side", "Hostile, aggressive, and argumentative behavior", "Unable to compromise"];
    const anxietyDisorderSymptoms = ["Trouble concentrating or making decisions", "Feeling irritable, tense, or restless", "Experiencing nausea or abdominal distress", "Having heart palpitations", "Sweating, trembling, or shaking", "Trouble sleeping", "Having a sense of impending danger, panic, or doom"];

    let dCount = 0, eCount = 0, aCount = 0, pCount = 0;

    const manyMental = parseInt(prompt("How many symptoms are you feeling? "));
    for (let x = 0; x < manyMental; x++) {
      const symptom = prompt("What are your symptoms? (please write one): ");
      if (depression.includes(symptom)) {
        dCount++;
      }
      if (eatingDisorders.includes(symptom)) {
        eCount++;
      }
      if (anxietyDisorderSymptoms.includes(symptom)) {
        aCount++;
      }
      if (paranoiaSymptoms.includes(symptom)) {
        pCount++;
      }
    }

    if (dCount > eCount && dCount > aCount && dCount > pCount) {
      alert("You are experiencing depression. Seek professional help for support and guidance.");
    } else if (eCount > dCount && eCount > aCount && eCount > pCount) {
      alert("You are experiencing eating disorders. Seek professional help for support and guidance.");
    } else if (aCount > dCount && aCount > eCount && aCount > pCount) {
      alert("You are experiencing anxiety disorder. Seek professional help for support and guidance.");
    } else if (pCount > dCount && pCount > eCount && pCount > aCount) {
      alert("You are experiencing paranoia. Seek professional help for support and guidance.");
    } else {
      alert("You seem to be doing okay! If you feel any more symptoms, please rerun the assessment or consult a professional.");
    }
  }
}

// Define a JavaScript class for physical health assessment
class PhysicalHealth extends Health {
  constructor() {
    super();
  }

  // Perform physical health assessment
  assessPhysicalHealth() {
    const covid = ["fever", "chills", "cough", "shortness of breath", "difficulty breathing", "fatigue", "muscle aches", "body aches", "headache", "new loss of taste", "new loss of smell", "sore throat", "congestion", "runny nose", "nausea", "vomiting", "diarrhea"];
    const viralHepatitis = ["fever", "fatigue", "loss of appetite", "nausea vomiting", "abdominal pain", "dark urine", "light-colored stools", "joint pain", "skin"];
    const influenza = ["fever", "feeling feverish", "chills", "cough", "sore throat", "runny nose", "stuffy nose", "muscle aches", "body aches", "headaches", "fatigue (tiredness)", "vomiting", "diarrhea"];
    const pneumonia = ["cough", "yellow mucus", "bloody mucus", "fever, sweating", "shaking chills", "shortness of breath", "shallow breathing", "sharp chest pain", "stabbing chest pain", "loss of appetite", "low energy", "fatigue", "nausea", "vomiting", "confusion"];
    const chickenpox = ["low-grade fever", "feeling tired", "headache", "stomach ache", "skin rash", "small blisters", "scabs after the blisters break", "blotchy skin", "crusty spots"];
    const commonCold = ["stuffy", "runny nose", "scratchy throat ", "tickly throat", "sneezing", "watering eyes", "low-grade fever", "sore throat", "mild hacking cough", "achy muscles", "achy bones", "headache", "mild fatigue", "chills", "watery snot"];
    const malaria = ["fever", "chills", "sweating", "headache", "nausea", "vomiting", "muscle aches", "fatigue", "diarrhea"];

    let covidCount = 0, viralHepatitisCount = 0, influenzaCount = 0, pneumoniaCount = 0, chickenpoxCount = 0, commonColdCount = 0, malariaCount = 0;

    const manyPhysical = parseInt(prompt("How many symptoms are you feeling? "));
    for (let x = 0; x < manyPhysical; x++) {
      const symptom = prompt("What are your symptoms? (please write one): ");
      if (covid.includes(symptom)) {
        covidCount++;
      }
      if (viralHepatitis.includes(symptom)) {
        viralHepatitisCount++;
      }
      if (influenza.includes(symptom)) {
        influenzaCount++;
      }
      if (pneumonia.includes(symptom)) {
        pneumoniaCount++;
      }
      if (chickenpox.includes(symptom)) {
        chickenpoxCount++;
      }
      if (commonCold.includes(symptom)) {
        commonColdCount++;
      }
      if (malaria.includes(symptom)) {
        malariaCount++;
      }
    }

    if (covidCount > viralHepatitisCount && covidCount > influenzaCount && covidCount > pneumoniaCount && covidCount > chickenpoxCount && covidCount > commonColdCount && covidCount > malariaCount) {
      alert("You are experiencing symptoms related to COVID-19. Seek medical attention and follow health guidelines.");
    } else if (viralHepatitisCount > covidCount && viralHepatitisCount > influenzaCount && viralHepatitisCount > pneumoniaCount && viralHepatitisCount > chickenpoxCount && viralHepatitisCount > commonColdCount && viralHepatitisCount > malariaCount) {
      alert("You are experiencing symptoms related to viral hepatitis. Seek medical attention and follow health guidelines.");
    } else if (influenzaCount > covidCount && influenzaCount > viralHepatitisCount && influenzaCount > pneumoniaCount && influenzaCount > chickenpoxCount && influenzaCount > commonColdCount && influenzaCount > malariaCount) {
      alert("You are experiencing symptoms related to influenza. Seek medical attention and follow health guidelines.");
    } else if (pneumoniaCount > covidCount && pneumoniaCount > viralHepatitisCount && pneumoniaCount > influenzaCount && pneumoniaCount > chickenpoxCount && pneumoniaCount > commonColdCount && pneumoniaCount > malariaCount) {
      alert("You are experiencing symptoms related to pneumonia. Seek medical attention and follow health guidelines.");
    } else if (chickenpoxCount > covidCount && chickenpoxCount > viralHepatitisCount && chickenpoxCount > influenzaCount && chickenpoxCount > pneumoniaCount && chickenpoxCount > commonColdCount && chickenpoxCount > malariaCount) {
      alert("You are experiencing symptoms related to chickenpox. Seek medical attention and follow health guidelines.");
    } else if (commonColdCount > covidCount && commonColdCount > viralHepatitisCount && commonColdCount > influenzaCount && commonColdCount > pneumoniaCount && commonColdCount > chickenpoxCount && commonColdCount > malariaCount) {
      alert("You are experiencing symptoms related to the common cold. Seek medical attention and follow health guidelines.");
    } else if (malariaCount > covidCount && malariaCount > viralHepatitisCount && malariaCount > influenzaCount && malariaCount > pneumoniaCount && malariaCount > chickenpoxCount && malariaCount > commonColdCount) {
      alert("You are experiencing symptoms related to malaria. Seek medical attention and follow health guidelines.");
    } else {
      alert("You seem to be doing okay! If you feel any more symptoms, please rerun the assessment or consult a professional.");
    }
  }
}

// Function to perform a general health checkup
function performHealthCheckup() {
  const status = prompt("How are you feeling today? (Good/Bad)").toLowerCase();
  if (status === "good") {
    const checkup = prompt("That's great to hear! Do you want a checkup? (yes/no)").toLowerCase();
    if (checkup === "yes") {
      const name = prompt("What is your name?");
      const age = parseInt(prompt(`How old are you, ${name}?`));
      const weight = parseFloat(prompt("How much do you weigh (in lbs)?"));
      const height = parseFloat(prompt("How tall are you (in inches)?"));
      const gender = prompt("What is your gender (Male/Female)?");
      const person = new Health(name, age, weight, height, gender);
      person.bmiRange();
      person.bmrRange();
      alert("BMI stands for Body Mass Index, and BMR stands for Basal Metabolic Rate. That's all for your checkup! Have a great and healthy day!");
    } else {
      alert("Have a great and healthy day!");
    }
  } else if (status === "bad") {
    const type = prompt("I'm sorry to hear that. Do you want to assess your mental or physical health?").toLowerCase();
    if (type === "mental") {
      const mentalAssessment = new MentalHealth();
      mentalAssessment.assessMentalHealth();
    } else if (type === "physical") {
      const physicalAssessment = new PhysicalHealth();
      physicalAssessment.assessPhysicalHealth();
    } else {
      alert("I'm sorry, I haven't been trained to understand that yet. Try again later!");
    }
  } else {
    alert("Sorry, I haven't been trained to understand that yet.");
  }
}
