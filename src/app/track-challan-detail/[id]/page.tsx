"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import CommonHeader from "../../components/common/CommonHeader";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResolutionTimeline from "../../components/track-status/ResolutionTimeLine";
import { RaiseDispute } from "../../components/track-status/RaiseDispute";
import { getRequestWithoutToken } from "@/lib/api";
import { Check } from "lucide-react";
import { copyWithFeedback, formatDate } from "@/lib/helpers";
import { FollowUp } from "@/lib/types";
import WebVersionCommonComponent from "@/app/components/track-status/WebVersionCommonComponent";
import Lottie from "lottie-react";
import loaderAnimation from "../../loader.json";

interface PageProps {
  params: {
    id: string;
  };
}

interface CaseLead {
  id: number;
  challanNo: string;
  vehicleNo: string;
  vehicleType: string;
  activeSubscription: string;
  latestSecondaryStatus: string;
  resolutionDate: string;
  challanInvoice: string;
  challanAmount: number;
  // add other fields as needed
}

interface CaseData {
  caseLead: CaseLead;
  followups: FollowUp[];
}

interface CaseResponse {
  data: CaseData;
  status: string;
  message: string;
}

function TrackChallanDetail({ params }: PageProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { id } = params;
  const router = useRouter();
  // const [incidentDetail, setIncidentDetail] = useState<CaseData | null>(null);
  const [caseData, setCaseData] = useState<CaseLead | null>(null);
  const [followUpData, setfollowUpData] = useState<FollowUp[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIncidentData = async () => {
    try {
      setLoading(true);
      const response = await getRequestWithoutToken<CaseResponse>(
        `/v1/customer/incidents/${id}`,
        {},
        true
      );
      setCaseData(response?.data?.caseLead);
      setfollowUpData(response?.data?.followups);
    } catch (err) {
      console.error("Error fetching dashboard:", err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!open) {
      fetchIncidentData();
    }
  }, [open]);

  const handleBack = () => {
    router.push("/track-status-dashboard");
  };
  const handleRaiseDispute = () => {
    setOpen(true);
  };

  if (loading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-50">
        <Lottie
          animationData={loaderAnimation}
          loop={true}
          className="w-32 h-32"
        />
      </div>
    );

  if (error) return <p>{error}</p>;
  return (
    <>
      <div className="bg-slate-100 lg:hidden   ">
        <Header />
        <div className="bg-white rounded-lg mt-15 ">
          <CommonHeader title="Challan Detail" onBack={handleBack} />
        </div>
        <div className="px-4 ">
          <div className="bg-cyan-600 p-4 rounded-t-lg mt-4">
            <div className="text-white text-sm">
              <p>Challan </p>
              <p className="flex ">
                {caseData?.challanNo}{" "}
                {copied ? (
                  <Check size={16} className="ml-2 mt-1 text-green-500" />
                ) : (
                  <Copy
                    size={16}
                    className="ml-2 mt-1 cursor-pointer"
                    onClick={() =>
                      copyWithFeedback(`${caseData?.challanNo}`, setCopied)
                    }
                  />
                )}
              </p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-b-lg">
            <div className="flex justify-between items-center mb-3">
              <div className="font-bold text-gray-900">
                ₹{caseData?.challanAmount?.toFixed(2)}
              </div>
              <div
                className={`px-2 py-1 text-xs font-semibold rounded  bg-orange-50 text-orange-700`}
              >
                {caseData?.latestSecondaryStatus}
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm">
              <div className="flex justify-between items-center">
                <div className="text-[#737373] text-sm">Incident ID</div>
                <div className="text-gray-700 font-medium">
                  IRN-{caseData?.id}
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <div className="text-[#737373] text-sm">Vehicle</div>
                <div className="text-gray-700 font-medium">
                  {caseData?.vehicleNo}
                </div>
              </div>

              <Separator />
              <div className="flex justify-between items-center">
                <div className="text-[#737373] text-sm">Resolution Date</div>
                <div className="text-gray-700 font-medium">
                  {formatDate(`${caseData?.resolutionDate}`)}
                </div>
              </div>
            </div>
          </div>
          <Button
            className="bg-white text-black w-full mt-4"
            onClick={() => window.open(caseData?.challanInvoice, "_blank")}
          >
            Download Receipt
          </Button>
          <Button
            className="bg-cyan-600 text-white w-full mt-4"
            onClick={handleRaiseDispute}
          >
            Raise a Dispute
          </Button>
        </div>
        <div className="mt-4 px-4 mb-10">
          <ResolutionTimeline followUps={followUpData} />
        </div>
        <RaiseDispute open={open} onOpenChange={setOpen} id={id} />
      </div>
      <WebVersionCommonComponent
        LeftTabComponent={
          <div className="bg-white rounded-lg ">
            <Header />
            <div className="bg-white rounded-lg">
              <CommonHeader title="Challan Detail" onBack={handleBack} />
            </div>
            <div className="flex justify-center gap-2">
              <div className="mt-4 px-4  w-full min-h-screen ">
                <ResolutionTimeline followUps={followUpData} />
                <Button
                  className="bg-cyan-600 text-white w-full mt-4"
                  onClick={handleRaiseDispute}
                >
                  Raise a Dispute
                </Button>
              </div>
              <div className="px-4 w-full">
                <div className="bg-cyan-600 p-4 rounded-t-lg mt-4">
                  <div className="text-white text-sm">
                    <p>Challan </p>
                    <p className="flex ">
                      {caseData?.challanNo}{" "}
                      {copied ? (
                        <Check size={16} className="ml-2 mt-1 text-green-500" />
                      ) : (
                        <Copy
                          size={16}
                          className="ml-2 mt-1 cursor-pointer"
                          onClick={() =>
                            copyWithFeedback(
                              `${caseData?.challanNo}`,
                              setCopied
                            )
                          }
                        />
                      )}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="p-4 bg-white rounded-b-lg">
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-bold text-gray-900">
                        ₹{caseData?.challanAmount?.toFixed(2)}
                      </div>
                      <div
                        className={`px-2 py-1 text-xs font-semibold rounded  bg-orange-50 text-orange-700`}
                      >
                        {caseData?.latestSecondaryStatus}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-3 text-sm">
                      <div className="flex justify-between items-center">
                        <div className="text-[#737373] text-sm">
                          Incident ID
                        </div>
                        <div className="text-gray-700 font-medium">
                          IRN-{caseData?.id}
                        </div>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <div className="text-[#737373] text-sm">Vehicle</div>
                        <div className="text-gray-700 font-medium">
                          {caseData?.vehicleNo}
                        </div>
                      </div>

                      <Separator />
                      <div className="flex justify-between items-center">
                        <div className="text-[#737373] text-sm">
                          Resolution Date
                        </div>
                        <div className="text-gray-700 font-medium">
                          {formatDate(`${caseData?.resolutionDate}`)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-white text-black w-full mt-4 mb-4 hover:bg-black hover:text-white border "
                    onClick={() => {
                      if (caseData?.challanInvoice) {
                        window.open(caseData.challanInvoice, "_blank");
                      } else {
                        alert("Receipt not available!");
                      }
                    }}
                  >
                    Download Receipt
                  </Button>
                </div>
              </div>
            </div>
            <RaiseDispute open={open} onOpenChange={setOpen} id={id} />
          </div>
        }
      />
    </>
  );
}

export default TrackChallanDetail;
