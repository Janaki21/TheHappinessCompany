// script.js

function calculateDopamineScore(socialMedia, purpose,screenTime) {
    // Your code for calculating the dopamine score
    const maxPossibleScore = 10; // Adjust this value based on the maximum possible contribution from all factors
    
    
    const socialMediaContributions = {
        'other': 2,
        'you': 1,
        'insta': 0,
        'snap': -1
    };
    const socialMediaContribution = socialMediaContributions[socialMedia] || 0;

    const purposeContributions = {
        'excellent': 2,
        'good': 1,
        'pair': 0,
        'poor': -1
    };
    const purposeContribution = purposeContributions[purpose] || 0;
    const screenTimeContributions = isNaN(screenTime) ? 0 : Math.max(0, Math.min(6, 5 - screenTime));
    

    const totalDopamineScore = socialMediaContribution + purposeContribution +screenTimeContributions;

    const feedback = generateFeedback(totalDopamineScore, maxPossibleScore);

    return {
        totalScore: totalDopamineScore,
        maxPossibleScore: maxPossibleScore,
        feedback: feedback
    };
}

function generateFeedback(totalDopamineScore, maxPossibleScore) {
    if (isNaN(totalDopamineScore) || isNaN(maxPossibleScore) || maxPossibleScore <= 0) {
        return "There was an error calculating the feedback. Please ensure all inputs are valid.";
    }

    const percentage = (totalDopamineScore / maxPossibleScore) * 100;
    const roundedPercentage = Math.round(percentage);

    let feedback = '';
    let improvementTechniques = '';
    let scoreDescription = '';
    
    if (totalDopamineScore <= 2) {
        feedback = "Your total dopamine score is quite low, indicating that there is room for improvement in your current lifestyle habits. Consider incorporating more physical activity into your routine, aiming for at least 30 minutes of moderate exercise most days of the week. Additionally, prioritize a consistent sleep schedule, aiming for 7-9 hours of quality sleep per night. Engaging in activities you enjoy and finding moments of relaxation can also positively impact your dopamine levels.";
        improvementTechniques = "To boost your dopamine score, focus on regular exercise, prioritize quality sleep, and incorporate stress-reducing activities into your daily routine. Consider exploring new hobbies or activities that bring you joy, and aim for a more balanced and fulfilling lifestyle.";
        scoreDescription = "Your current score represents an opportunity for significant improvement. Taking steps to enhance your daily habits can positively impact your overall well-being and contribute to a higher dopamine score.";
    } else if (totalDopamineScore <= 5) {
        feedback = "Your total dopamine score suggests there's an opportunity for improvement in your current lifestyle habits. Focus on incorporating more physical activity into your routine, aiming for at least 30 minutes of moderate exercise most days of the week. Prioritize a consistent sleep schedule, aiming for 7-9 hours of quality sleep per night. Engaging in activities you enjoy and finding moments of relaxation can also positively impact your dopamine levels.";
    improvementTechniques = "To boost your dopamine score, concentrate on regular exercise, prioritize quality sleep, and incorporate stress-reducing activities into your daily routine. Explore new hobbies or activities that bring you joy and aim for a more balanced and fulfilling lifestyle. These adjustments can contribute to overall well-being and enhance your dopamine levels over time.";
    scoreDescription = "Your current score represents an opportunity for significant improvement. Taking steps to enhance your daily habits can positively impact your overall well-being and contribute to a higher dopamine score.";
} else if (totalDopamineScore <= 7) {
    feedback = "Your current dopamine score suggests room for improvement in your lifestyle habits, particularly in managing stress levels and mobile usage. Consider prioritizing activities that promote a stress-free environment. Incorporate stress-reducing activities into your daily routine and explore mindfulness techniques. Additionally, limiting mobile phone usage can contribute positively to your overall well-being.";
    improvementTechniques = "To enhance your dopamine score, focus on living stress-free by integrating relaxation techniques into your routine. Explore mindfulness or meditation practices to manage stress effectively. Limiting mobile phone usage, especially before bedtime, can improve sleep quality and positively impact dopamine levels. These adjustments can contribute to a more balanced and fulfilling lifestyle.";
    scoreDescription = "Your current score represents an opportunity for significant improvement. Adopting habits that promote a stress-free life and reducing mobile usage can positively impact your overall well-being and contribute to a higher dopamine score.";
} 
    else if (totalDopamineScore <= 10) {
        feedback = "Fantastic! Your current lifestyle is likely contributing to elevated dopamine levels. Keep up the good work by maintaining a balanced routine, ensuring adequate rest, and managing stress effectively. Engaging in activities that bring you joy and exploring new opportunities for personal growth can further enhance your well-being.";
        improvementTechniques = "To sustain or improve your high score, continue prioritizing a balanced lifestyle. Explore new activities, nurture meaningful connections, and incorporate mindfulness practices into your routine. Consider setting new goals to challenge and fulfill yourself.";
        scoreDescription = "Your score represents a healthy lifestyle with room for continued enhancements. Sustaining your positive habits and exploring new opportunities can contribute to long-term well-being.";
    } else {
        feedback = "Your lifestyle is contributing to excellent dopamine levels. Congratulations! Continue with your current habits, and consider incorporating occasional variety to keep things interesting. Maintaining a healthy balance in your routine, nurturing meaningful connections, and celebrating your achievements will contribute to sustained well-being.";
        improvementTechniques = "To maintain or further enhance your high score, continue prioritizing a balanced lifestyle. Explore occasional new activities, nurture relationships, and celebrate your achievements. Incorporating mindfulness practices can further enhance your overall well-being.";
        scoreDescription = "Your high score reflects an excellent lifestyle with ample opportunities for continued well-being and fulfillment.";
    }
    
    // Calculate percentage and add it to scoreDescription
    scoreDescription += ` Your score is approximately in the top ${100 - roundedPercentage}% of potential dopamine scores.`;
    
    return `${feedback} ${improvementTechniques} ${scoreDescription}`;
}

function calculateDopamine() {
    const socialMedia = document.getElementById('socialMediaType').value;
    const purpose = document.getElementById('purpose').value;


    

    const screenTime = parseInt(document.getElementById('screenTime').value);

    const result = calculateDopamineScore(socialMedia,purpose,screenTime);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Total Dopamine Score: ${result.totalScore}/${result.maxPossibleScore}</p><p>${result.feedback}</p>`;
}
