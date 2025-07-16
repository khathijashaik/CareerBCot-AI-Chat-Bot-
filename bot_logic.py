def get_bot_response(user_input):
    user_input = user_input.lower()

    if "resume" in user_input:
        return "Keep your resume one-page, use action words like 'Built', 'Managed', 'Designed'. Add projects and achievements clearly."
    elif "internship" in user_input:
        return "Look for internships on Internshala, LinkedIn, and AngelList. Tailor your resume to each internship."
    elif "interview" in user_input:
        return "Practice common questions like 'Tell me about yourself', and research the company before your interview."
    elif "motivate" in user_input or "confidence" in user_input:
        return "Believe in your journey. Every expert was once a beginner. You've got this!"
    else:
        return "I'm still learning! Try asking about resume tips, interview questions, or motivation."

