import { GOOGLE_CLIENT_ID } from "../core/constants";
import useEphemeralKeyPair from "../core/useEphemeralKeyPair";
import GoogleLogo from "../components/GoogleLogo";
import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Button } from "antd";
import { WalletOutlined, GoogleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos } from "@aptos-labs/ts-sdk";

const aptos = new Aptos();

function LoginPage() {
  const { account } = useWallet();

  useEffect(() => {
    // fetchList();
  }, [account?.address]);
  const ephemeralKeyPair = useEphemeralKeyPair();

  const redirectUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");

  const searchParams = new URLSearchParams({
    /**
     * Replace with your own client ID
     */
    client_id: GOOGLE_CLIENT_ID,
    /**
     * The redirect_uri must be registered in the Google Developer Console. This callback page
     * parses the id_token from the URL fragment and combines it with the ephemeral key pair to
     * derive the keyless account.
     *
     * window.location.origin == http://localhost:5173
     */
    redirect_uri: `${window.location.origin}/callback`,
    /**
     * This uses the OpenID Connect implicit flow to return an id_token. This is recommended
     * for SPAs as it does not require a backend server.
     */
    response_type: "id_token",
    scope: "openid email profile",
    nonce: ephemeralKeyPair.nonce,
  });
  redirectUrl.search = searchParams.toString();

  return (
      <>
        <Layout style={{
          minHeight: "100vh",
          backgroundImage: `url("/background.jpeg")`, // 这里路径以项目根目录为基准
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <Row align="middle" justify="center" style={{ paddingTop: "10%" }}>
            <Col span={12}>
              <div style={{padding: "2rem", textAlign: "center"}}>
                <h1 style={{
                  fontSize: "7rem",
                  fontFamily: "Dancing Script",
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                  marginTop: "-4rem"
                }}>Guan Dan</h1>
                <br/>
                <Col span={12} style={{position: "relative", paddingRight: "150px"}}>
                  <WalletSelector/>
                </Col>

                <div
                    style={{
                      background: "rgba(50, 50, 50, 0.8)",
                      padding: "2rem",
                      marginTop: "2rem",
                      borderRadius: "0.5rem",
                      textAlign: "center"
                    }}
                >
                  <Button
                      type="primary"
                      size="large"
                      icon={<PlayCircleOutlined/>}
                      style={{width: "100%", marginBottom: "1rem"}}
                  >
                    Start Game
                  </Button>
                  <p style={{
                    marginBottom: "0.5rem",
                    color: "white",
                    fontSize: "1.5rem",
                    fontFamily: "cursive"
                  }}>Already have an account?</p>
                  <a
                      href={redirectUrl.toString()}
                      className="flex justify-center items-center border rounded-lg px-8 py-2 hover:bg-gray-100 hover:shadow-sm active:bg-gray-50 active:scale-95 transition-all"
                  >
                    <GoogleLogo/>
                    Sign in with Google
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Layout>
      </>
  );
}

export default LoginPage;