import type { NextApiRequest, NextApiResponse } from "next";
import { Result } from "@/types/checkout";
import signIn from "@/utils/api/auth/signin";
import { setAuthCookie } from "@/utils/cookies";
import { ResultSigninType } from "@/types/signin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result<ResultSigninType["data"]>>
) {
  console.log("req.body", req.body);
  const result = await signIn(req.body);
  console.log("result", result);

  if (result.statusCode === 200 && result.data?.jwtToken) {
    res.setHeader("Set-Cookie", setAuthCookie(result.data.jwtToken));
  }

  return res.json(result);
}

// import type { NextApiRequest, NextApiResponse } from "next";
// import { Result } from "@/types/checkout";
// import signIn from "@/utils/api/auth/signin";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Result>,
// ) {
//   console.log("req.body", req.body);
//   const result = await signIn(req.body);
//   console.log("result", result);

//   return res.json(result);
// }

// ============================

// import type { NextApiRequest, NextApiResponse } from "next";
// import { serialize } from 'cookie';
// import { AuthResponse } from "@/types/apiRoutes";
// import { BASE_URL } from "@/constants/environment";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<AuthResponse>
// ) {

//   try {
//     const response = await fetch(
//       `${BASE_URL}/users/sign_in`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ "user": req.body }),
//       }
//     );

//     const token = response.headers.get('authorization');
//     const data: AuthResponse = await response.json();
//     if (response.ok) {
//       res.setHeader('Set-Cookie', serialize('token', token || "", {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         path: '/',
//         sameSite: 'strict',
//       }));
//     }
//     return res.status(response.status).json({
//       status: response.status,
//       message: data.message || (response.ok ? "登入成功" : "登入失敗"),
//     });

//   } catch (error) {
//     console.error("登入錯誤:", error);
//   }
// }
