import React from 'react'

export default function TermsAndCondition() {
    return (
        <div className=' w-9/12 py-9 flex flex-col items-start mx-auto gap-4'>
            <h1 className='font-semibold text-xl text-gray-100'>
                Terms and Conditions
            </h1>
            <div>
                <h1 className='text-lg py-1'>Introduction</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    Welcome to Blackbook . The Website is operated by Blackbook team. These Terms and Conditions ("Terms") govern your use of the Website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Website.
                </p>
            </div>
            <div>
                <h1 className='text-lg py-1'>User accounts</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    Account Registration: To use certain features of the Website, you may be required to create an account. You must provide accurate, complete, and current information during the registration process.
                </p>
                <p className='text-sm pt-1 text-gray-300'>
                    Account Security: You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.
                </p>
                <p className='text-sm pt-1 text-gray-300'>
                    Account Termination: We reserve the right to suspend or terminate your account if you violate these Terms or engage in any conduct that we deem harmful to the Website or other users.
                </p >
            </div>

            <div>
                <h1 className='text-lg py-1'>Use of the Website</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    Permitted Use: You may use the Website for personal, non-commercial purposes in accordance with these Terms.\n\n'
                    'Prohibited Activities: You agree not to:
                </p>
                <p className='text-sm pt-1 text-gray-300'>

                    - Use the Website for any unlawful purpose.
                    - Attempt to gain unauthorized access to the Website or its related systems.
                    - Upload or distribute viruses, malware, or other harmful software.
                    - Engage in any activity that disrupts or interferes with the Website or its servers.
                </p>
            </div>
            <div>
                <h1 className='text-lg py-1'>User content</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    Content Ownership: You retain ownership of any content you submit, post, or display on the Website ("User Content"). <br />
                    License to Use: By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, reproduce, and distribute your User Content in connection with the Website. <br />
                    Content Restrictions: You agree not to submit User Content that is illegal, harmful, offensive, or infringes on the rights of others.
                </p>
            </div>
            <div>
                <h1 className='text-lg py-1'>Privacy</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    Your use of the Website is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices.
                </p>
            </div>
            <div>
                <h1 className='text-lg py-1'>Intellectual property</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    Ownership: All intellectual property rights in the Website and its content (excluding User Content) are owned by us or our licensors. <br />
                    Limited License: We grant you a limited, non-exclusive, non-transferable license to access and use the Website for personal, non-commercial purposes.
                </p>
            </div>
            <div>
                <h1 className='text-lg py-1'>Disclaimers and Limitation of Liability</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    Disclaimers: The Website is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the Website\'s content. <br />
                    Limitation of Liability: To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of the Website.
                </p>
            </div>
            <div>
                <h1 className='text-lg py-1'>
                    Changes to the Terms
                </h1>
                <p className='text-sm pt-1 text-gray-300'>
                    We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by updating the date at the top of these Terms and, in some cases, we may provide additional notice (such as adding a statement to the homepage of the Website or sending you a notification).
                </p>
            </div>
            <div>
                <h1 className='text-lg py-1'>Governing Law</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    These Terms are governed by the laws of the Nepal, without regard to its conflict of laws principles.
                </p>
            </div>
            <div>
                <h1 className='text-lg py-1'>Contact us</h1>
                <p className='text-sm pt-1 text-gray-300'>
                    If you have any questions about these Terms, please contact us at
                    {/* send mail at blackbook.project.official@gmail.com */}
                    <a href="mailto:blackbook.project.official@gmail.com
                    " className='px-1 text-blue-700'> blackbook.project.official@gmail.com</a>
                </p>
            </div>
        </div>
    )
}
