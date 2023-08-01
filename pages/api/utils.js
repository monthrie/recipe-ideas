export function getEffortDescriptor(effortLevel) {
    switch (effortLevel) {
      case 1: return "quick and easy to prepare";
      case 2: return "fairly quick to prepare";
      case 3: return "of moderate difficulty";
      case 4: return "requiring some effort";
      case 5: return "requiring a lot of time and effort";
      default: return "of moderate difficulty";
    }
  }